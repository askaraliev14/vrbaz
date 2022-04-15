import FlexBox from 'components/FlexBox';
import { Span } from 'components/Typography';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const CheckoutSummary2 = () => {
  return <Box>
      <Typography color="secondary.900" fontWeight="700" mb={3}>
        Ваши заказы
      </Typography>

      {cartList.map(item => <FlexBox justifyContent="space-between" alignItems="center" mb={3} key={item.name}>
          <Typography>
            <Span fontWeight="700" fontSize="14px">
              {item.quantity}
            </Span>{' '}
            x {item.name}
          </Typography>
          <Typography>${item.price.toFixed(2)}</Typography>
        </FlexBox>)}

      <Divider sx={{
      borderColor: 'grey.300',
      mb: '1.5rem'
    }} />

      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Итого товар:</Typography>
        <Typography fontWeight="700">${2610 .toFixed(2)}</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Доставка:</Typography>
        <Typography fontWeight="700">-</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Налог:</Typography>
        <Typography fontWeight="700">${40 .toFixed(2)}</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb={3}>
        <Typography color="grey.600">Скидка:</Typography>
        <Typography fontWeight="700">-</Typography>
      </FlexBox>

      <Divider sx={{
      borderColor: 'grey.300',
      mb: '0.5rem'
    }} />

      <FlexBox fontWeight="700" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography>Итого:</Typography>
        <Typography fontWeight="700">${2650 .toFixed(2)}</Typography>
      </FlexBox>
    </Box>;
};

const cartList = [{
  name: 'iPhone 12',
  quantity: 1,
  price: 999
}, {
  name: 'iPhone 12 pro',
  quantity: 1,
  price: 1199
}, {
  name: 'iPhone 12 pro max',
  quantity: 1,
  price: 1299
}];
export default CheckoutSummary2;