import FlexBox from 'components/FlexBox';
import CheckoutNavLayout from 'components/layout/CheckoutNavLayout';
import ProductCard7 from 'components/product-cards/ProductCard7';
import { Span } from 'components/Typography';
import { useAppContext } from 'contexts/app/AppContext';
import countryList from 'data/countryList';
import { Autocomplete, Button, Card, Divider, Grid, MenuItem, TextField } from '@mui/material';
import Link from 'next/link';

const Cart = () => {
  const {
    state
  } = useAppContext();
  const cartList = state.cart.cartList;

  const getTotalPrice = () => {
    return cartList.reduce((accumulator, item) => accumulator + item.price * item.qty, 0) || 0;
  };

  return <CheckoutNavLayout>
      <Grid container spacing={3}>
        <Grid item lg={8} md={8} xs={12}>
          {cartList.map(item => <ProductCard7 key={item.id} {...item} />)}
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Card sx={{
          padding: '1.5rem 1.75rem',
          '@media only screen and (max-width: 678px)': {
            padding: '1rem'
          }
        }}>
            <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
              <Span color="grey.600">Total:</Span>
              <FlexBox alignItems="flex-end">
                <Span fontSize="18px" fontWeight="600" lineHeight="1">
                  ${getTotalPrice().toFixed(2)}
                </Span>
                <Span fontWeight="600" fontSize="14px" lineHeight="1">
                  00
                </Span>
              </FlexBox>
            </FlexBox>

            <Divider sx={{
            mb: '1rem'
          }} />

            <FlexBox alignItems="center" mb={2}>
              <Span fontWeight="600" mr={1.25}>
                Additional Comments
              </Span>
              <Span fontSize="12px" color="primary.main" lineHeight="1" p="6px 10px" bgcolor="primary.light" borderRadius="3px">
                Note
              </Span>
            </FlexBox>

            <TextField variant="outlined" rows={6} fullWidth multiline sx={{
            mb: '1rem'
          }} />

            <Divider sx={{
            mb: '1rem'
          }} />

            <TextField label="Voucher" placeholder="Voucher" size="small" variant="outlined" fullWidth />

            <Button variant="outlined" color="primary" fullWidth sx={{
            mt: '1rem',
            mb: '30px'
          }}>
              Apply Voucher
            </Button>

            <Divider sx={{
            mb: '1rem'
          }} />

            <Span fontWeight="600" mb={2} display="block">
              Shipping Estimates
            </Span>

            <Autocomplete options={countryList} getOptionLabel={option => option.label} fullWidth sx={{
            mb: '1rem'
          }} renderInput={params => <TextField {...params} label="Country" placeholder="Select Country" variant="outlined" size="small" />} />

            <TextField label="State" placeholder="Select State" select variant="outlined" size="small" fullWidth>
              {stateList.map(item => <MenuItem value={item.value} key={item.label}>
                  {item.label}
                </MenuItem>)}
            </TextField>

            <TextField label="Zip Code" placeholder="3100" variant="outlined" size="small" fullWidth sx={{
            mt: '1rem'
          }} />

            <Button variant="outlined" color="primary" fullWidth sx={{
            my: '1rem'
          }}>
              Calculate Shipping
            </Button>

            <Link href="/checkout">
              <Button variant="contained" color="primary" fullWidth>
                Checkout Now
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </CheckoutNavLayout>;
};

const stateList = [{
  value: 'New York',
  label: 'New York'
}, {
  value: 'Chicago',
  label: 'Chicago'
}];
export default Cart;