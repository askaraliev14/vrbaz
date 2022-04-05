import Link from "next/link";
import FlexBox from "../FlexBox";
import { Box, styled } from "@mui/system";
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography";
import React, { useCallback } from "react";
import BazarRating from "components/BazarRating";
import { useTheme } from "@mui/system";
import PreviewIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppContext } from "contexts/app/AppContext";
import { Chip } from "@mui/material";
const StyledCard = styled(Box)(({
  theme
}) => ({
  position: "relative",
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",
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
  position: "relative",
  padding: "0 40px 20px 40px",
  background: theme.palette.primary[100]
}));
const ItemController = styled(Box)(({
  theme
}) => ({
  display: "none",
  transition: "all 250ms ease-in-out",
  "& .controller": {
    position: "absolute",
    right: 15,
    bottom: 0,
    width: 35,
    height: 120,
    background: "#fff",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    "& span": {
      width: "100%",
      height: "100%",
      padding: "8px 10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        cursor: "pointer",
        background: theme.palette.primary.main,
        "& svg": {
          color: "#fff"
        }
      }
    },
    "& svg": {
      fontSize: 18,
      color: theme.palette.grey[600]
    }
  }
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
  background: theme.palette.primary.main,
  top: "16px",
  left: "0px",
  zIndex: 11
}));

const ProductCard16 = props => {
  const {
    sx,
    off,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating
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
      <ImgBox id="imgBox">
        {off !== 0 && <StyledChip color="primary" size="small" label={`${off}% off`} />}
        <Link href={`/product/${id}`}>
          <a>
            <LazyImage src={imgUrl} width={100} height={100} layout="responsive" objectFit="contain" />
          </a>
        </Link>
        <ItemController className="controlBox">
          <Box className="controller">
            <Link href={`/product/${id}`}>
              <a>
                <Span>
                  <PreviewIcon />
                </Span>
              </a>
            </Link>
            <Span sx={{
            borderTop: `1px solid ${palette.grey[300]}`,
            borderBottom: `1px solid ${palette.grey[300]}`
          }}>
              <FavoriteIcon />
            </Span>
            <Span onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}>
              <ShoppingCartIcon />
            </Span>
          </Box>
        </ItemController>
      </ImgBox>

      <ContentWrapper>
        <FlexBox alignItems="center" justifyContent="center">
          <Box pr={1} fontWeight="500" color="primary.main">
            ${(price - price * off / 100).toFixed(2)}
          </Box>
          {off !== 0 && <Box color="grey.600" fontWeight="500">
              <del>{price?.toFixed(2)}</del>
            </Box>}
        </FlexBox>

        <Link href={`/product/${id}`}>
          <a>
            <H3 className="title" fontSize="15px" textAlign="center" fontWeight="600" color="text.secondary" my="6px" title={title}>
              {title}
            </H3>
          </a>
        </Link>

        {!hideRating && <Box display="flex" alignItems="center" justifyContent="center">
            <BazarRating value={rating || 0} color="warn" readOnly />{" "}
            <Span sx={{
          color: palette.grey[600]
        }}>{`(${rating}.0)`}</Span>
          </Box>}
      </ContentWrapper>
    </StyledCard>;
};

export default ProductCard16;