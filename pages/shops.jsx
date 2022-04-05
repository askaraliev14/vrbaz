import FlexBox from 'components/FlexBox';
import NavbarLayout from 'components/layout/NavbarLayout';
import ShopCard1 from 'components/shop/ShopCard1';
import { H2, Span } from 'components/Typography';
import { Grid, Pagination } from '@mui/material';
import React from 'react';

const ShopList = () => {
  return <NavbarLayout>
      <H2 mb={3}>All Shops</H2>

      <Grid container spacing={3}>
        {shopList.map((item, ind) => <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ShopCard1 {...item} />
          </Grid>)}
      </Grid>

      <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center" mt={4}>
        <Span color="grey.600">Showing 1-9 of 300 Shops</Span>
        <Pagination count={shopList.length} variant="outlined" color="primary" />
      </FlexBox>
    </NavbarLayout>;
};

const shopList = [{
  name: 'Scarlett Beauty',
  rating: 5,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/cycle.png',
  imgUrl: '/assets/images/faces/propic.png',
  shopUrl: '/shop/53244445'
}, {
  name: 'Scroll Through',
  rating: 5,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/banner.png',
  imgUrl: '/assets/images/faces/propic(1).png',
  shopUrl: '/shop/53244445'
}, {
  name: 'Coveted Clicks',
  rating: 4.5,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/banner-3.png',
  imgUrl: '/assets/images/faces/propic(2).png',
  shopUrl: '/shop/53244445'
}, {
  name: 'Constant Shoppers',
  rating: 4,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/banner-4.png',
  imgUrl: '/assets/images/faces/propic(3).png',
  shopUrl: '/shop/53244445'
}, {
  name: 'Keyboard Kiosk',
  rating: 5,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/banner-5.png',
  imgUrl: '/assets/images/faces/propic(4).png',
  shopUrl: '/shop/53244445'
}, {
  name: 'Anytime Buys',
  rating: 5,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/banner-6.png',
  imgUrl: '/assets/images/faces/propic(5).png',
  shopUrl: '/shop/53244445'
}, {
  name: 'Word Wide Wishes',
  rating: 4,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/banner-7.png',
  imgUrl: '/assets/images/faces/propic(6).png',
  shopUrl: '/shop/53244445'
}, {
  name: 'Cybershop',
  rating: 5,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/banner-8.png',
  imgUrl: '/assets/images/faces/propic(7).png',
  shopUrl: '/shop/53244445'
}, {
  name: 'Scarlett Beauty',
  rating: 5,
  address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
  phone: '(613) 343-9004',
  coverImgUrl: '/assets/images/banners/banner-9.png',
  imgUrl: '/assets/images/faces/propic(8).png',
  shopUrl: '/shop/53244445'
}];
export default ShopList;