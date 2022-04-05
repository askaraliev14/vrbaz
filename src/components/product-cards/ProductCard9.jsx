import Image from "components/BazarImage";
import FlexBox from "components/FlexBox";
import { H5, Span } from "components/Typography";
import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Remove from "@mui/icons-material/Remove";
import Visibility from "@mui/icons-material/Visibility";
import { Button, Chip, Dialog, DialogContent, Grid, IconButton, Rating } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { Fragment, useCallback, useState } from "react";
import ProductCard9Style from "./ProductCard9Style";

const ProductCard9 = ({
  imgUrl,
  title,
  price,
  off,
  rating
}) => {
  const [cartAmount, setCartAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const toggleDialog = useCallback(() => {
    setOpen(open => !open);
  }, []);
  const handleCartAmountChange = useCallback(amount => () => {
    console.log(amount);
    if (amount >= 0) setCartAmount(amount);
  }, []);
  return (// overflow="hidden" width="100%" {...props}
    <Fragment>
      <ProductCard9Style>
        <Grid container spacing={1}>
          <Grid item sm={3} xs={12}>
            <Box position="relative">
              {!!off && <Chip color="primary" label={`${off}% off`} size="small" sx={{
                position: "absolute",
                fontSize: "10px",
                fontWeight: "600",
                px: "5px",
                top: "10px",
                left: "10px"
              }} />}
              <IconButton className="quick-view" size="small">
                <Visibility fontSize="small" onClick={toggleDialog} />
              </IconButton>
              <Image src={imgUrl} alt={title} width="100%" />
            </Box>
          </Grid>

          <Grid item sm={8} xs={12}>
            <FlexBox flexDirection="column" justifyContent="center" height="100%" p={2}>
              <Link href="/product/34324321">
                <a>
                  <H5 fontWeight="600" my="0.5rem">
                    {title}
                  </H5>
                </a>
              </Link>

              <Rating value={rating || 0} color="warn" readOnly />

              <FlexBox mt={1} mb={2} alignItems="center">
                <H5 fontWeight={600} color="primary.main" mr={1}>
                  ${price?.toFixed(2)}
                </H5>
                {off && <Span fontWeight="600" color="grey.600">
                    <del>${(price - price * off / 100).toFixed(2)}</del>
                  </Span>}
              </FlexBox>

              <FlexBox alignItems="center" justifyContent="space-between" flexDirection="row-reverse" height="30px" sx={{
                display: {
                  xs: "flex",
                  sm: "none"
                }
              }}>
                <FlexBox alignItems="center" flexDirection="row-reverse">
                  <Button variant="outlined" color="primary" sx={{
                    padding: "5px"
                  }} onClick={handleCartAmountChange(cartAmount + 1)}>
                    <Add fontSize="small" />
                  </Button>

                  {!!cartAmount && <Fragment>
                      <H5 fontWeight="600" fontSize="15px" mx={1.5}>
                        {cartAmount}
                      </H5>
                      <Button variant="outlined" color="primary" sx={{
                      padding: "5px"
                    }} onClick={handleCartAmountChange(cartAmount - 1)}>
                        <Remove fontSize="small" />
                      </Button>
                    </Fragment>}
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </Grid>

          <Grid item sm={1} xs={12}>
            <FlexBox flexDirection="column" alignItems="center" justifyContent="space-between" minWidth="30px" height="100%" p="1rem 0rem" ml="auto" sx={{
              display: {
                xs: "none",
                sm: "flex"
              }
            }}>
              <IconButton size="small">
                <FavoriteBorder className="favorite-icon outlined-icon" fontSize="small" />
              </IconButton>

              <FlexBox className="add-cart" alignItems="center" flexDirection={!!!cartAmount ? "column" : "column-reverse"}>
                <Button variant="outlined" color="primary" sx={{
                  padding: "5px"
                }} onClick={handleCartAmountChange(cartAmount + 1)}>
                  <Add fontSize="small" />
                </Button>
                {!!cartAmount && <Fragment>
                    <H5 fontWeight="600" fontSize="15px" m={1}>
                      {cartAmount}
                    </H5>
                    <Button variant="outlined" color="primary" sx={{
                    padding: "5px"
                  }} onClick={handleCartAmountChange(cartAmount - 1)}>
                      <Remove fontSize="small" />
                    </Button>
                  </Fragment>}
              </FlexBox>
            </FlexBox>
          </Grid>
        </Grid>
      </ProductCard9Style>

      <Dialog open={open} maxWidth={false} onClose={toggleDialog}>
        <DialogContent sx={{
          paddingBottom: "1.25rem"
        }}>
          <IconButton sx={{
            position: "absolute",
            top: "0",
            right: "0"
          }}>
            <Close className="close" fontSize="small" color="primary" onClick={toggleDialog} />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

ProductCard9.defaultProps = {
  title: "Apple iPhone 5 Unlocked 16GB 8MP Used Cell-Phone-16gbIOS Used Refurbished 100%Factory Used",
  imgUrl: "/assets/images/products/macbook.png",
  off: 50,
  price: 450,
  rating: 0,
  subcategories: [{
    title: "Bike",
    url: "/#"
  }, {
    title: "Ducati",
    url: "/#"
  }, {
    title: "Motors",
    url: "/#"
  }]
};
export default ProductCard9;