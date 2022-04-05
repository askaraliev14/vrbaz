import Link from "next/link";
import FlexBox from "../FlexBox";
import { useTheme } from "@mui/system";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import BazarCard from "components/BazarCard";
import LazyImage from "components/LazyImage";
import BazarRating from "components/BazarRating";
import { H3, Span } from "components/Typography";
import { useAppContext } from "contexts/app/AppContext";
import PreviewIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import React, { useCallback } from "react";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Chip, styled } from "@mui/material";
const StyledBazarCard = styled(BazarCard)(({
  theme
}) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  margin: "auto",
  overflow: "hidden",
  transition: "all 250ms ease-in-out",
  borderRadius: "0px 10px 10px 10px",
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
const ImageWrapper = styled(Box)(({
  theme
}) => ({
  position: "relative",
  display: "inline-block",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "block"
  }
}));
const ImageBox = styled(Box)(({
  theme
}) => ({
  padding: "44px 40px",
  borderBottom: `1px solid ${theme.palette.grey[300]}`
}));
const ItemController = styled(Box)(({
  theme
}) => ({
  display: "none",
  transition: "all 250ms ease-in-out",
  "& .controller": {
    position: "absolute",
    right: 15,
    top: 0,
    bottom: 0,
    margin: "auto",
    width: 25,
    height: 120,
    background: "#fff",
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: theme.shadows[2],
    "& span": {
      width: "100%",
      height: "100%",
      padding: "10px 0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        cursor: "pointer",
        background: "#f3f5f9"
      }
    },
    "& a": {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        cursor: "pointer",
        background: "#f3f5f9"
      }
    },
    "& svg": {
      fontSize: 18,
      color: theme.palette.grey[600]
    }
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
  borderRadius: "0px 50px 50px 0px",
  background: theme.palette.primary.main,
  top: "16px",
  left: "0px",
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
const ButtonBox = styled(FlexBox)(({
  theme
}) => ({
  marginTop: "15px",
  justifyContent: "space-between",
  "& button": {
    color: "#fff",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary[400]
    }
  }
}));

const ProductCard14 = props => {
  const {
    off,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,
    hoverEffect
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
  return <StyledBazarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {off !== 0 && <StyledChip color="primary" size="small" label={`${off}% off`} />}

        <ImageBox>
          <Link href={`/product/${id}`}>
            <a>
              <LazyImage alt={title} src={imgUrl} width={190} height={190} layout="responsive" objectFit="contain" />
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
        </ImageBox>
      </ImageWrapper>

      <ContentWrapper>
        <Box flex="1 1 0" minWidth="0px" mr={1}>
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
        </Box>

        <ButtonBox>
          {
          /* <Button
           variant="contained"
           sx={{ py: "3px", width: "100%", fontSize: "13px" }}
           onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
          >
           <Add sx={{ fontSize: "13px" }} /> Add to cart
          </Button> */
        }

          <Button variant="contained" sx={{
          py: "3px",
          width: "100%",
          fontSize: "13px"
        }} onClick={handleCartAmountChange(cartItem?.qty ? cartItem.qty - 1 : (cartItem?.qty || 0) + 1)}>
            {cartItem?.qty ? <>
                <Remove />
                Remove from Cart
              </> : <>
                <Add /> Add to Cart
              </>}
          </Button>

          <Button variant="contained" sx={{
          p: "3px 8px",
          ml: "10px"
        }}>
            <FavoriteIcon sx={{
            fontSize: "16px"
          }} />
          </Button>
        </ButtonBox>
      </ContentWrapper>
    </StyledBazarCard>;
};

export default ProductCard14;