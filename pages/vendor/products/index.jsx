import FlexBox from 'src/components/FlexBox';
import DeliveryBox from 'src/components/icons/DeliveryBox';
import DashboardPageHeader from 'src/components/layout/DashboardPageHeader';
import VendorDashboardLayout from 'src/components/layout/VendorDashboardLayout';
import TableRow from 'src/components/TableRow';
import { H5 } from 'src/components/Typography';
import East from '@mui/icons-material/East';
import { Avatar, IconButton, Pagination, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Products = () => {
  return <VendorDashboardLayout>
      <DashboardPageHeader title="Products" icon={DeliveryBox} />

      <TableRow sx={{
      display: {
        xs: 'none',
        md: 'flex'
      },
      padding: '0px 18px',
      mb: '-0.125rem',
      bgcolor: 'transparent'
    }} elevation={0}>
        <FlexBox my="0px" mx={0.75} flex="2 2 220px !important">
          <H5 ml={7} color="grey.600" textAlign="left">
            Name
          </H5>
        </FlexBox>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Stock
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Regular price
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Sale Price
        </H5>
        <H5 flex="0 0 0 !important" color="grey.600" px={2.75} my="0px"></H5>
      </TableRow>

      {productList.map((item, ind) => <Link href={item.href} key={ind}>
          <TableRow sx={{
        my: '1rem',
        padding: '6px 18px'
      }}>
            <FlexBox alignItems="center" m={0.75} flex="2 2 220px !important">
              <Avatar src="/assets/images/products/imageshoes.png" sx={{
            height: 36,
            width: 36
          }} />
              <Typography textAlign="left" ml={2.5}>
                Nike React Phantom Run Flyknit 2
              </Typography>
            </FlexBox>
            <H5 m={0.75} textAlign="left" fontWeight="600" color={item.stock < 6 ? 'error.main' : 'inherit'}>
              {item.stock.toString().padStart(2, '0')}
            </H5>
            <H5 m={0.75} textAlign="left" fontWeight="400">
              ${item.price.toFixed(2)}
            </H5>
            <H5 m={0.75} textAlign="left" fontWeight="400">
              ${item.price.toFixed(2)}
            </H5>

            <Typography textAlign="center" color="grey.600" sx={{
          flex: '0 0 0 !important',
          display: {
            xs: 'none',
            md: 'block'
          }
        }}>
              <IconButton>
                <East fontSize="small" color="inherit" />
              </IconButton>
            </Typography>
          </TableRow>
        </Link>)}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={5} onChange={data => {
        console.log(data);
      }} />
      </FlexBox>
    </VendorDashboardLayout>;
};

const productList = [{
  orderNo: '1050017AS',
  stock: 30,
  price: 350,
  href: '/vendor/products/5452423'
}, {
  orderNo: '1050017AS',
  stock: 20,
  price: 500,
  href: '/vendor/products/5452423'
}, {
  orderNo: '1050017AS',
  stock: 2,
  price: 700,
  href: '/vendor/products/5452423'
}, {
  orderNo: '1050017AS',
  stock: 25,
  price: 300,
  href: '/vendor/products/5452423'
}, {
  orderNo: '1050017AS',
  stock: 1,
  price: 700,
  href: '/vendor/products/5452423'
}];
export default Products;