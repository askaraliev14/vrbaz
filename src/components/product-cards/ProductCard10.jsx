import Link from "next/link";
import FlexBox from "../FlexBox";
import { useTheme } from "@mui/system";
import Add from "@mui/icons-material/Add";
import LazyImage from "components/LazyImage";
import Remove from "@mui/icons-material/Remove";
import { H3, Span } from "components/Typography";
import BazarRating from "components/BazarRating";
import { useAppContext } from "contexts/app/AppContext";
import { Box, Button, Chip, styled } from "@mui/material";
import React, { useCallback } from "react";
import PreviewIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const StyledBazarCard = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  margin: "auto",
  overflow: "hidden"
}));
const ImageWrapper = styled(Box)(({
  theme
}) => ({
  position: "relative",
  display: "inline-block",
  textAlign: "center",
  overflow: "hidden",
  borderRadius: 8,
  [theme.breakpoints.down("sm")]: {
    display: "block"
  },
  "&:hover": {
    "& .hoverImgBox": {
      filter: "blur(5px)"
    },
    "& .hoverButtonBox": {
      opacity: 1
    }
  }
}));
const HoverButtonBox = styled(Box)(() => ({
  transition: ".5s ease",
  opacity: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "& .buttonBox": {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& .addCartButton": {
      position: "absolute",
      bottom: 20,
      margin: "auto",
      padding: "4px 14px",
      "& svg": {
        fontSize: 16
      }
    }
  }
}));
const ImageBox = styled(Box)(() => ({
  transition: "all .3s ease",
  opacity: 1,
  padding: "44px 40px",
  background: "#F5F5F5"
}));
const ItemController = styled(Box)(({
  theme
}) => ({
  background: "#fff",
  borderRadius: "5px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: theme.shadows[2],
  "& span": {
    width: "100%",
    height: "100%",
    padding: "6px 12px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#f3f5f9"
    }
  },
  "& svg": {
    fontSize: 22,
    color: theme.palette.grey[600]
  }
}));
const StyledChip = styled(Chip)(() => ({
  position: "absolute",
  fontSize: "10px",
  fontWeight: 600,
  paddingLeft: 3,
  paddingRight: 3,
  top: "10px",
  left: "10px",
  zIndex: 11
}));
const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));

const ProductCard13 = props => {
  const {
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
  return <StyledBazarCard>
      <ImageWrapper>
        {off !== 0 && <StyledChip color="primary" size="small" label={`${off}% off`} />}
        <ImageBox className="hoverImgBox">
          <Link href={`/product/${id}`}>
            <a>
              <LazyImage alt={title} src={imgUrl} width={190} height={190} layout="responsive" objectFit="contain" />
            </a>
          </Link>
        </ImageBox>

        <HoverButtonBox className="hoverButtonBox">
          <Box className="buttonBox">
            <ItemController>
              <Link href={`/product/${id}`}>
                <a>
                  <Span>
                    <PreviewIcon />
                  </Span>
                </a>
              </Link>
              <Span sx={{
              borderLeft: `1px solid ${palette.grey[300]}`,
              borderRight: `1px solid ${palette.grey[300]}`
            }}>
                <FavoriteIcon />
              </Span>
              <Span onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}>
                <ShoppingCartIcon />
              </Span>
            </ItemController>
            <Button color="primary" variant="outlined" className="addCartButton" onClick={handleCartAmountChange(cartItem?.qty ? cartItem.qty - 1 : (cartItem?.qty || 0) + 1)}>
              {cartItem?.qty ? <>
                  <Remove />
                  Remove from Cart
                </> : <>
                  <Add /> Add to Cart
                </>}
            </Button>
          </Box>
        </HoverButtonBox>
      </ImageWrapper>

      <ContentWrapper>
        <Link href={`/product/${id}`}>
          <a>
            <H3 className="title" fontSize="14px" textAlign="left" fontWeight="600" color="text.secondary" mb={1} title={title}>
              {title}
            </H3>
          </a>
        </Link>

        {!hideRating && <Box display="flex" alignItems="center">
            <BazarRating value={rating || 0} color="warn" readOnly />{" "}
            <Span sx={{
          color: palette.grey[600]
        }}>{`(${rating}.0)`}</Span>
          </Box>}

        <FlexBox alignItems="center" mt={0.5}>
          <Box pr={1} fontWeight="600" color="primary.main">
            ${(price - price * off / 100).toFixed(2)}
          </Box>
          {off !== 0 && <Box color="grey.600" fontWeight="600">
              <del>{price?.toFixed(2)}</del>
            </Box>}
        </FlexBox>
      </ContentWrapper>
    </StyledBazarCard>;
};

export default ProductCard13;