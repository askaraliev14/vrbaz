import FlexBox from '/src/components/FlexBox';
import DashboardPageHeader from '/src/components/layout/DashboardPageHeader';
import VendorDashboardLayout from '/src/components/layout/VendorDashboardLayout';
import TableRow from '/src/components/TableRow';
import { H5, H6 } from '/src/components/Typography';
import Delete from '@mui/icons-material/Delete';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { Avatar, Button, Card, Divider, Grid, IconButton, MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const OrderDetails = () => {
  const router = useRouter();
  const {
    id
  } = router.query;
  return <VendorDashboardLayout>
      <DashboardPageHeader title="Order Details" icon={ShoppingBag} button={<Link href="/vendor/orders">
            <Button color="primary" sx={{
        bgcolor: 'primary.light',
        px: '2rem'
      }}>
              Back to Order List
            </Button>
          </Link>} />

      <Card sx={{
      p: '0px',
      mb: '30px'
    }}>
        <TableRow elevation={0} sx={{
        bgcolor: 'grey.200',
        p: '12px',
        borderRadius: '0px !important'
      }}>
          <FlexBox flex="0 0 0 !important" m={0.75} alignItems="center" whiteSpace="pre">
            <Typography fontSize="14px" color="grey.600" mr={0.5}>
              Order ID:
            </Typography>
            <Typography fontSize="14px">{id}</Typography>
          </FlexBox>
          <FlexBox className="pre" m={0.75} alignItems="center">
            <Typography fontSize="14px" color="grey.600" mr={0.5}>
              Placed on:
            </Typography>
            <Typography fontSize="14px">
              {format(new Date(), 'dd MMM, yyyy')}
            </Typography>
          </FlexBox>

          <Box maxWidth="160px">
            <TextField label="Order Status" placeholder="Order Status" select fullWidth>
              {orderStatusList.map(item => <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>)}
            </TextField>
          </Box>
        </TableRow>

        <Box p="1rem 1.5rem 10px">
          <TextField label="Add Product" fullWidth />
        </Box>

        <Box py={1}>
          {[1, 2, 3, 4].map(item => <FlexBox px={2} py={1} flexWrap="wrap" alignItems="center" key={item}>
              <FlexBox flex="2 2 260px" m={0.75} alignItems="center">
                <Avatar src="/assets/images/products/imagetree.png" sx={{
              height: 64,
              width: 64
            }} />
                <Box ml={2.5}>
                  <H6 my="0px">Nike React Phantom Run Flyknit 2</H6>
                  <FlexBox alignItems="center">
                    <Typography fontSize="14px" color="grey.600">
                      $145 x
                    </Typography>
                    <Box maxWidth="60px" ml={1} mt={0.5}>
                      <TextField defaultValue={3} type="number" fullWidth />
                    </Box>
                  </FlexBox>
                </Box>
              </FlexBox>
              <FlexBox flex="1 1 260px" m={0.75} alignItems="center">
                <Typography fontSize="14px" color="grey.600">
                  Product properties: Black, L
                </Typography>
              </FlexBox>
              <FlexBox flex="0 0 0 !important" m={0.75} alignItems="center">
                <IconButton>
                  <Delete fontSize="small" />
                </IconButton>
              </FlexBox>
            </FlexBox>)}
        </Box>
      </Card>

      <Grid container spacing={3}>
        <Grid item lg={6} md={6} xs={12}>
          <Card sx={{
          p: '20px 30px',
          mb: '1.5rem'
        }}>
            <H5 mt={0} mb={2}>
              Shipping Address
            </H5>
            <TextField defaultValue="Kelly Williams 777 Brockton Avenue, Abington MA 2351" multiline rows={5} fullWidth sx={{
            borderRadius: '10px'
          }} />
          </Card>

          <Card sx={{
          p: '20px 30px'
        }}>
            <H5 mt={0} mb={2}>
              Customer's Note
            </H5>
            <TextField defaultValue="Please deliver ASAP." multiline rows={5} fullWidth sx={{
            borderRadius: '10px'
          }} />
          </Card>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Card sx={{
          p: '20px 30px',
          mb: '1.5rem'
        }}>
            <H5 mt={0} mb={2}>
              Total Summary
            </H5>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
                Subtotal:
              </Typography>
              <H6 my="0px">$335</H6>
            </FlexBox>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
                Shipping fee:
              </Typography>
              <FlexBox alignItems="center" maxWidth="100px" ml={1} mt={0.5}>
                <Typography mr={1}>$</Typography>
                <TextField defaultValue={10} type="number" fullWidth />
              </FlexBox>
            </FlexBox>
            <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize="14px" color="grey.600">
                Discount:
              </Typography>
              <FlexBox alignItems="center" maxWidth="100px" ml={1} mt={0.5}>
                <Typography mr={1}>-$</Typography>
                <TextField defaultValue={30} type="number" fullWidth />
              </FlexBox>
            </FlexBox>

            <Divider sx={{
            mb: '0.5rem'
          }} />

            <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
              <H6 my="0px">Total</H6>
              <H6 my="0px">$315</H6>
            </FlexBox>
            <Typography fontSize="14px">Paid by Credit/Debit Card</Typography>
          </Card>

          <Button variant="contained" color="primary" sx={{
          ml: 'auto',
          display: 'block'
        }}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </VendorDashboardLayout>;
};

const orderStatusList = [{
  label: 'Processing',
  value: 'Processing'
}, {
  label: 'Pending',
  value: 'Pending'
}, {
  label: 'Delivered',
  value: 'Delivered'
}, {
  label: 'Cancelled',
  value: 'Cancelled'
}];
export default OrderDetails;