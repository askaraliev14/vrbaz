import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import BabyFeeder from 'components/icons/BabyFeeder';
import BasketBall from 'components/icons/BasketBall';
import BeautyProducts from 'components/icons/BeautyProducts';
import Camera from 'components/icons/Camera';
import DrillMachine from 'components/icons/DrillMachine';
import Picture from 'components/icons/Picture';
import Sofa from 'components/icons/Sofa';
import Tshirt from 'components/icons/Tshirt';
import Watch from 'components/icons/Watch';
import Wheel from 'components/icons/Wheel';
import WomenDress from 'components/icons/WomenDress';
import MobileNavigationBar from 'components/mobile-navigation/MobileNavigationBar';
import SaleNavbar from 'components/navbar/SaleNavbar';
import Sticky from 'components/sticky/Sticky';
import Topbar from 'components/topbar/Topbar';
import { Divider } from '@mui/material';
import Head from 'next/head';
import React, { Fragment } from 'react';

const SaleLayout2 = ({
  children,
  title = 'Multivendor Ecommerce | Sale'
}) => {
  return <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Topbar />
      <Header />
      <Divider />
      <Sticky fixedOn={0}>
        <SaleNavbar saleCategoryList={saleCategoryList} />
      </Sticky>
      <div className="section-after-sticky">{children}</div>
      <MobileNavigationBar />
      <Footer />
    </Fragment>;
};

const saleCategoryList = [{
  icon: Tshirt,
  title: 'Men'
}, {
  icon: WomenDress,
  title: 'Women'
}, {
  icon: BeautyProducts,
  title: 'Cosmetics'
}, {
  icon: Watch,
  title: 'Accessories'
}, {
  icon: Camera,
  title: 'Eelctronics'
}, {
  icon: Sofa,
  title: 'Furniture'
}, {
  icon: BasketBall,
  title: 'Sport'
}, {
  icon: Wheel,
  title: 'Automobile'
}, {
  icon: DrillMachine,
  title: 'Hardware'
}, {
  icon: BabyFeeder,
  title: 'Baby products'
}, {
  icon: Picture,
  title: 'Photos'
}, {
  icon: Tshirt,
  title: 'Clothes'
}];
export default SaleLayout2;