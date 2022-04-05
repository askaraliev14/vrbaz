import FlexBox from 'components/FlexBox';
import TableRow from 'components/TableRow';
import { H5 } from 'components/Typography';
import { Pagination } from '@mui/material';
import React, { Fragment } from 'react';
import OrderRow from './OrderRow'; // component props interface

const VendorOrderList = () => {
  return <Fragment>
      <TableRow sx={{
      display: {
        xs: 'none',
        md: 'flex'
      },
      padding: '0px 18px',
      background: 'none'
    }} elevation={0}>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Order #
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Status
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Date purchased
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Total
        </H5>
        <H5 flex="0 0 0 !important" color="grey.600" px={2.75} my="0px"></H5>
      </TableRow>

      {orderList.map((item, ind) => <OrderRow item={item} key={ind} />)}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={5} variant="outlined" color="primary" onChange={data => {
        console.log(data);
      }} />
      </FlexBox>
    </Fragment>;
};

const orderList = [{
  orderNo: '1050017AS',
  status: 'Pending',
  purchaseDate: new Date(),
  price: 350,
  href: '/vendor/orders/5452423'
}, {
  orderNo: '1050017AS',
  status: 'Processing',
  purchaseDate: new Date(),
  price: 500,
  href: '/vendor/orders/5452423'
}, {
  orderNo: '1050017AS',
  status: 'Delivered',
  purchaseDate: '2020/12/23',
  price: 700,
  href: '/vendor/orders/5452423'
}, {
  orderNo: '1050017AS',
  status: 'Delivered',
  purchaseDate: '2020/12/23',
  price: 700,
  href: '/vendor/orders/5452423'
}, {
  orderNo: '1050017AS',
  status: 'Cancelled',
  purchaseDate: '2020/12/15',
  price: 300,
  href: '/vendor/orders/5452423'
}];
export default VendorOrderList;