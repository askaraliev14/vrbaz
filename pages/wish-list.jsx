import FlexBox from 'components/FlexBox';
import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import ProductCard1 from 'components/product-cards/ProductCard1';
import productDatabase from 'data/product-database';
import Favorite from '@mui/icons-material/Favorite';
import { Button, Grid, Pagination } from '@mui/material';
import React from 'react';

const WishList = () => {
  return <CustomerDashboardLayout>
      <DashboardPageHeader title="My Wish List" icon={Favorite} button={<Button color="primary" sx={{
      px: '2rem',
      bgcolor: 'primary.light'
    }}>
            Add All to Cart
          </Button>} navigation={<CustomerDashboardNavigation />} />

      <Grid container spacing={3}>
        {productDatabase.slice(53, 59).map(item => <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ProductCard1 {...item} />
          </Grid>)}
      </Grid>

      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={5} variant="outlined" color="primary" onChange={data => {
        console.log(data);
      }} />
      </FlexBox>
    </CustomerDashboardLayout>;
};

export default WishList;