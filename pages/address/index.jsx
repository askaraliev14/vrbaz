import FlexBox from 'components/FlexBox';
import DashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import TableRow from 'components/TableRow';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Place from '@mui/icons-material/Place';
import { Button, IconButton, Pagination, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const AddressList = () => {
  return <DashboardLayout>
      <DashboardPageHeader title="My Addresses" icon={Place} button={<Button color="primary" sx={{
      bgcolor: 'primary.light',
      px: '2rem'
    }}>
            Add New Address
          </Button>} navigation={<CustomerDashboardNavigation />} />

      {orderList.map((_, ind) => <TableRow sx={{
      my: '1rem',
      padding: '6px 18px'
    }} key={ind}>
          <Typography whiteSpace="pre" m={0.75} textAlign="left">
            Ralf Edward
          </Typography>
          <Typography flex="1 1 260px !important" m={0.75} textAlign="left">
            777 Brockton Avenue, Abington MA 2351
          </Typography>
          <Typography whiteSpace="pre" m={0.75} textAlign="left">
            +1927987987498
          </Typography>

          <Typography whiteSpace="pre" textAlign="center" color="grey.600">
            <Link href="/address/xkssThds6h37sd">
              <IconButton>
                <Edit fontSize="small" color="inherit" />
              </IconButton>
            </Link>
            <IconButton onClick={e => e.stopPropagation()}>
              <Delete fontSize="small" color="inherit" />
            </IconButton>
          </Typography>
        </TableRow>)}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={5} onChange={data => {
        console.log(data);
      }} />
      </FlexBox>
    </DashboardLayout>;
};

const orderList = [{
  orderNo: '1050017AS',
  status: 'Pending',
  purchaseDate: new Date(),
  price: 350
}, {
  orderNo: '1050017AS',
  status: 'Processing',
  purchaseDate: new Date(),
  price: 500
}, {
  orderNo: '1050017AS',
  status: 'Delivered',
  purchaseDate: '2020/12/23',
  price: 700
}, {
  orderNo: '1050017AS',
  status: 'Delivered',
  purchaseDate: '2020/12/23',
  price: 700
}, {
  orderNo: '1050017AS',
  status: 'Cancelled',
  purchaseDate: '2020/12/15',
  price: 300
}];
export default AddressList;