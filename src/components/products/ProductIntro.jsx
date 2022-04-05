import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import Add from "@mui/icons-material/Add";
import LazyImage from "components/LazyImage";
import Remove from "@mui/icons-material/Remove";
import BazarAvatar from "components/BazarAvatar";
import BazarButton from "components/BazarButton";
import BazarRating from "components/BazarRating";
import { H1, H2, H3, H6 } from "components/Typography";
import { useAppContext } from "contexts/app/AppContext";
import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import FlexBox from "../FlexBox";

const ProductIntro = ({
  product
}) => {
  const {
    id,
    price,
    title,
    imgGroup
  } = product;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const {
    state,
    dispatch
  } = useAppContext();
  const cartList = state.cart.cartList;
  const router = useRouter();
  const routerId = router.query.id;
  const cartItem = cartList.find(item => item.id === id || item.id === routerId);

  const handleImageClick = ind => () => {
    setSelectedImage(ind);
  };

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleCartAmountChange = useCallback(amount => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        qty: amount,
        name: title,
        price,
        imgUrl: imgGroup[0],
        id: id || routerId
      }
    });
  }, []);
  return <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <Box>
            <FlexBox justifyContent="center" mb={6}>
              <LazyImage src={product.imgGroup[selectedImage]} onClick={() => openImageViewer(imgGroup.indexOf(imgGroup[selectedImage]))} alt={title} height={300} width={300} loading="eager" objectFit="contain" />
              {isViewerOpen && <ImageViewer src={imgGroup} currentIndex={currentImage} onClose={closeImageViewer} backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }} />}
            </FlexBox>
            <FlexBox overflow="auto">
              {imgGroup.map((url, ind) => <Box height={64} width={64} minWidth={64} bgcolor="white" borderRadius="10px" display="flex" justifyContent="center" alignItems="center" border="1px solid" style={{
              cursor: "pointer"
            }} ml={ind === 0 ? "auto" : 0} mr={ind === imgGroup.length - 1 ? "auto" : "10px"} borderColor={selectedImage === ind ? "primary.main" : "grey.400"} onClick={handleImageClick(ind)} key={ind}>
                  <BazarAvatar src={url} variant="square" height={40} />
                </Box>)}
            </FlexBox>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={2}>{title}</H1>

          <FlexBox alignItems="center" mb={2}>
            <Box>Brand:</Box>
            <H6 ml={1}>Xiaomi</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazarRating color="warn" fontSize="1.25rem" value={4} readOnly />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>

          <Box mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              ${price.toFixed(2)}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>

          {!cartItem?.qty ? <BazarButton variant="contained" color="primary" sx={{
          mb: "36px",
          px: "1.75rem",
          height: "40px"
        }} onClick={handleCartAmountChange(1)}>
              Add to Cart
            </BazarButton> : <FlexBox alignItems="center" mb={4.5}>
              <BazarButton sx={{
            p: "9px"
          }} variant="outlined" size="small" color="primary" onClick={handleCartAmountChange(cartItem?.qty - 1)}>
                <Remove fontSize="small" />
              </BazarButton>
              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>
              <BazarButton sx={{
            p: "9px"
          }} variant="outlined" size="small" color="primary" onClick={handleCartAmountChange(cartItem?.qty + 1)}>
                <Add fontSize="small" />
              </BazarButton>
            </FlexBox>}

          <FlexBox alignItems="center" mb={2}>
            <Box>Sold By:</Box>
            <Link href="/shop/fdfdsa">
              <a>
                <H6 ml={1}>Mobile Store</H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>;
};

export default ProductIntro;