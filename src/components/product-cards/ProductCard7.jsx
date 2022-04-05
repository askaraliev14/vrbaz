import Image from 'components/BazarImage';
import FlexBox from 'components/FlexBox';
import { Span } from 'components/Typography';
import { useAppContext } from 'contexts/app/AppContext';
import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import Remove from '@mui/icons-material/Remove';
import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React, { useCallback } from 'react';
import ProductCard7Style from './ProductCard7Style';

const ProductCard7 = ({
  id,
  name,
  qty,
  price,
  imgUrl
}) => {
  const {
    dispatch
  } = useAppContext();
  const handleCartAmountChange = useCallback(amount => () => {
    dispatch({
      type: 'CHANGE_CART_AMOUNT',
      payload: {
        qty: amount,
        name,
        price,
        imgUrl,
        id
      }
    });
  }, []);
  return <ProductCard7Style>
      <Image src={imgUrl || '/assets/images/products/iphone-xi.png'} height={140} width={140} display="block" alt={name} />
      <FlexBox className="product-details" flexDirection="column" justifyContent="space-between" minWidth="0px" width="100%">
        <Link href={`/product/${id}`}>
          <a>
            <Span className="title" fontWeight="600" fontSize="18px" mb={1}>
              {name}
            </Span>
          </a>
        </Link>
        <Box position="absolute" right="1rem" top="1rem">
          <IconButton size="small" sx={{
          padding: '4px',
          ml: '12px'
        }} onClick={handleCartAmountChange(0)}>
            <Close fontSize="small" />
          </IconButton>
        </Box>

        <FlexBox // width="100%"
      justifyContent="space-between" alignItems="flex-end">
          <FlexBox flexWrap="wrap" alignItems="center">
            <Span color="grey.600" mr={1}>
              ${price.toFixed(2)} x {qty}
            </Span>
            <Span fontWeight={600} color="primary.main" mr={2}>
              ${(price * qty).toFixed(2)}
            </Span>
          </FlexBox>

          <FlexBox alignItems="center">
            <Button variant="outlined" color="primary" // padding="5px"
          // size="none"
          // borderColor="primary.light"
          disabled={qty === 1} sx={{
            p: '5px'
          }} onClick={handleCartAmountChange(qty - 1)}>
              <Remove fontSize="small" />
            </Button>
            <Span mx={1} fontWeight="600" fontSize="15px">
              {qty}
            </Span>
            <Button variant="outlined" color="primary" // padding="5px"
          // size="none"
          // borderColor="primary.light"
          sx={{
            p: '5px'
          }} onClick={handleCartAmountChange(qty + 1)}>
              <Add fontSize="small" />
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </ProductCard7Style>;
};

export default ProductCard7;