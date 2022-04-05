import BazarCard from "components/BazarCard";
import BazarRating from "components/BazarRating";
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography";
import { useAppContext } from "contexts/app/AppContext";
import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Remove from "@mui/icons-material/Remove";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import { Box, Button, Chip, Dialog, DialogContent, IconButton, styled } from "@mui/material";
import Link from "next/link";
import React, { Fragment, useCallback, useState } from "react";
import FlexBox from "../FlexBox";
import { useTheme } from "@mui/system";
import PreviewIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
  borderRadius: "8px",
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
const ImageBox = styled(Box)(() => ({
  padding: "44px 40px",
  background: "#efefef"
}));
const ItemController = styled(Box)(({
  theme
}) => ({
  display: "none",
  transition: "all 250ms ease-in-out",
  "& .controller": {
    position: "absolute",
    left: 0,
    right: 0,
    width: 120,
    height: 25,
    margin: "auto",
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
      padding: "0px 10px",
      display: "flex",
      alignItems: "center",
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
const HoverIconWrapper = styled(Box)(({
  theme
}) => ({
  display: "none",
  flexDirection: "column",
  position: "absolute",
  top: "7px",
  right: "15px",
  cursor: "pointer",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    display: "flex"
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

const ProductCard13 = props => {
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
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    state,
    dispatch
  } = useAppContext();
  const cartItem = state.cart.cartList.find(item => item.id === id);
  const toggleDialog = useCallback(() => {
    setOpen(open => !open);
  }, []);

  const toggleIsFavorite = async () => {
    setIsFavorite(fav => !fav);
  };

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

        <HoverIconWrapper>
          <IconButton sx={{
          p: "6px"
        }} onClick={toggleDialog}>
            <RemoveRedEye color="secondary" fontSize="small" />
          </IconButton>
          <IconButton sx={{
          p: "6px"
        }} onClick={toggleIsFavorite}>
            {isFavorite ? <Favorite color="primary" fontSize="small" /> : <FavoriteBorder fontSize="small" />}
          </IconButton>
        </HoverIconWrapper>

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
              borderLeft: `1px solid ${palette.grey[300]}`,
              borderRight: `1px solid ${palette.grey[300]}`
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
        <FlexBox>
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

          <FlexBox className="add-cart" flexDirection="column-reverse" alignItems="center" justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"} width="30px">
            <Button variant="outlined" color="primary" sx={{
            padding: "3px"
          }} onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}>
              <Add fontSize="small" />
            </Button>

            {!!cartItem?.qty && <Fragment>
                <Box color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </Box>
                <Button variant="outlined" color="primary" sx={{
              padding: "3px"
            }} onClick={handleCartAmountChange(cartItem?.qty - 1)}>
                  <Remove fontSize="small" />
                </Button>
              </Fragment>}
          </FlexBox>
        </FlexBox>
      </ContentWrapper>

      <Dialog open={open} maxWidth={false} onClose={toggleDialog}>
        <DialogContent sx={{
        paddingBottom: "1.25rem"
      }}>
          <IconButton sx={{
          position: "absolute",
          top: "0",
          right: "0"
        }} onClick={toggleDialog}>
            <Close className="close" fontSize="small" color="primary" />
          </IconButton>
        </DialogContent>
      </Dialog>
    </StyledBazarCard>;
};

export default ProductCard13;