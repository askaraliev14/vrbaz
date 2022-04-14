import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import MobileNavigationBar from 'components/mobile-navigation/MobileNavigationBar';
import Navbar from 'components/navbar/Navbar';
import Topbar from 'components/topbar/Topbar';
import Head from 'next/head';
import React, { Fragment } from 'react';

const SaleLayout1 = ({
  children,
  title = 'Multivendor Ecommerce | Sale'
}) => <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Topbar />

    <Header />

    <Navbar />

    {children}

    <MobileNavigationBar />

    <Footer />
  </Fragment>;

export default SaleLayout1;