import CheckoutForm2 from 'components/checkout/CheckoutForm2';
import CheckoutSummary2 from 'components/checkout/CheckoutSummary2';
import GroceryLayout from 'components/layout/GroceryLayout';
import { Container, Grid } from '@mui/material';
import React from 'react';

const Checkout = () => {
  return <GroceryLayout>
      <Container sx={{
      my: '1.5rem'
    }}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} xs={12}>
            <CheckoutForm2 />
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <CheckoutSummary2 />
          </Grid>
        </Grid>
      </Container>
    </GroceryLayout>;
};

export default Checkout;