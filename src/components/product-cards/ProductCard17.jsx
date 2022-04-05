import Link from "next/link";
import FlexBox from "../FlexBox";
import { useTheme } from "@mui/system";
import { Box, styled } from "@mui/system";
import Add from "@mui/icons-material/Add";
import LazyImage from "components/LazyImage";
import { Button, Chip } from "@mui/material";
import Remove from "@mui/icons-material/Remove";
import { H3, Span } from "components/Typography";
import BazarRating from "components/BazarRating";
import { useAppContext } from "contexts/app/AppContext";
import React, { useCallback, Fragment } from "react";
const StyledCard = styled(Box)(({
  theme
}) => ({
  position: "relative",
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",
  outline: `2px solid ${theme.palette.grey[200]}`,
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .css-1i2n18j": {
      display: "flex"
    },
    "& .controlBox": {
      display: "block"
    }
  }
}));
const ImgBox = styled(Box)(({
  theme
}) => ({
  height: 250,
  marginBottom: 100,
  padding: "60px 40px 20px 40px",
  background: theme.palette.primary[50]
}));
const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));
const StyledChip = styled(Chip)(({
  theme
}) => ({
  position: "absolute",
  fontSize: "10px",
  fontWeight: 600,
  paddingLeft: 3,
  paddingRight: 3,
  borderRadius: 0,
  color: "#fff",
  background: theme.palette.primary.main,
  top: "20px",
  left: "0px",
  zIndex: 11
}));
const StatusChipBox = styled(Box)(({
  theme
}) => ({
  width: 40,
  height: 42,
  position: "absolute",
  fontSize: "12px",
  background: theme.palette.primary.main,
  top: "0px",
  right: "30px",
  zIndex: 11,
  "& .triangle-left": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderLeft: `20px solid ${theme.palette.primary.main}`,
    borderBottom: "10px solid transparent"
  },
  "& .triangle-right": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderRight: `20px solid ${theme.palette.primary.main}`,
    borderBottom: "10px solid transparent"
  }
}));
const StatusChip = styled(Span)(() => ({
  height: "100%",
  display: "flex",
  color: "#fff",
  alignItems: "center",
  justifyContent: "center"
}));
const ColorBox = styled(FlexBox)(({
  theme
}) => ({
  padding: "10px 5px",
  "& span": {
    width: 12,
    height: 12,
    marginRight: 10,
    borderRadius: 8,
    "&:hover": {
      cursor: "pointer",
      outline: `2px solid ${theme.palette.grey[200]}`
    }
  }
}));
const StyledButton = styled(Button)(({
  theme
}) => ({
  padding: "4px",
  borderRadius: 0,
  transition: "all 0.3s",
  color: theme.palette.primary.main,
  "&:hover": {
    color: "#fff",
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`
  }
}));

const ProductCard17 = props => {
  const {
    sx,
    off,
    status,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,
    productColors
  } = props;
  const {
    palette
  } = useTheme();
  const {
    state,
    dispatch
  } = useAppContext();
  const cartItem = state.cart.cartList.find(item => item.id === id);
  const handleCartAmountChange = useCallback(amount => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        name: title,
        qty: amount,
        price,
        imgUrl,
        id
      }
    });
  }, []);
  return <StyledCard sx={sx}>
      <Link href={`/product/${id}`}>
        <a>
          <ImgBox id="imgBox">
            {status && <StatusChipBox>
                <StatusChip>{status}</StatusChip>
                <Box width="100%" display="flex">
                  <Box className="triangle-left" />
                  <Box className="triangle-right" />
                </Box>
              </StatusChipBox>}
            {off !== 0 && <StyledChip size="small" label={`${off}% off`} />}
            <LazyImage id="productImg" src={imgUrl} width={100} height={100} layout="responsive" objectFit="contain" />
          </ImgBox>
        </a>
      </Link>

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/product/${id}`}>
              <a>
                <H3 mb={1} className="title" fontSize="24px" textAlign="left" fontWeight="700" color="text.secondary" title={title}>
                  {title}
                </H3>
              </a>
            </Link>

            {!hideRating && <Box display="flex" alignItems="center">
                <BazarRating fontSize={18} value={rating || 0} color="warn" readOnly />{" "}
                <Span sx={{
              color: palette.grey[600]
            }}>{`(${rating}.0)`}</Span>
              </Box>}

            <ColorBox>
              {productColors.map((color, ind) => <Span key={ind} sx={{
              background: color
            }} />)}
            </ColorBox>

            <FlexBox alignItems="center" mt={0.5}>
              <Box pr={1} fontWeight="600" color="primary.main">
                ${(price - price * off / 100).toFixed(2)}
              </Box>
              {off !== 0 && <Box color="grey.600" fontWeight="600">
                  <del>{price?.toFixed(2)}</del>
                </Box>}
            </FlexBox>
          </Box>

          <FlexBox className="add-cart" flexDirection="column-reverse" alignItems="center" justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"} width="30px">
            <StyledButton variant="outlined" onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}>
              <Add fontSize="small" />
            </StyledButton>

            {!!cartItem?.qty && <Fragment>
                <Box color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </Box>
                <StyledButton variant="outlined" onClick={handleCartAmountChange(cartItem?.qty - 1)}>
                  <Remove fontSize="small" />
                </StyledButton>
              </Fragment>}
          </FlexBox>
        </FlexBox>
      </ContentWrapper>
    </StyledCard>;
};

export default ProductCard17;