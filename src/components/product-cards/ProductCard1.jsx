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
const StyledBazarCard = styled(BazarCard)(() => ({
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
    "& .css-1i2n18j": {
      display: "flex"
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

const ProductCard1 = ({
  id,
  title,
  price,
  imgUrl,
  rating,
  discount,
  hideRating,
  hoverEffect,
  showProductSize
}) => {
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
        {discount !== 0 && <StyledChip color="primary" size="small" label={`${discount}% off`} />}

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

        <Link href={`/product/${id}`}>
          <a>
            <LazyImage src={imgUrl} width={0} height={0} layout="responsive" alt={title} />
          </a>
        </Link>
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

            {!hideRating && <BazarRating value={rating || 0} color="warn" readOnly />}
            {showProductSize && <Span color="grey.600" mb={1} display="block">
                300ml
              </Span>}

            <FlexBox alignItems="center" mt={0.5}>
              <Box pr={1} fontWeight="600" color="primary.main">
                ${(price - price * discount / 100).toFixed(2)}
              </Box>
              {!!discount && <Box color="grey.600" fontWeight="600">
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

export default ProductCard1;