import FlexBox from 'components/FlexBox';
import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import TableRow from 'components/TableRow';
import { H3, H5, Small } from 'components/Typography';
import Person from '@mui/icons-material/Person';
import { Avatar, Button, Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
  return <CustomerDashboardLayout>
      <DashboardPageHeader icon={Person} title="My Profile" button={<Link href="/profile/edit">
            <Button color="primary" sx={{
        px: '2rem',
        bgcolor: 'primary.light'
      }}>
              Edit Profile
            </Button>
          </Link>} navigation={<CustomerDashboardNavigation />} />

      <Box mb={4}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card sx={{
            display: 'flex',
            p: '14px 32px',
            height: '100%',
            alignItems: 'center'
          }}>
              <Avatar src="/assets/images/faces/ralph.png" sx={{
              height: 64,
              width: 64
            }} />
              <Box ml={1.5} flex="1 1 0">
                <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center">
                  <div>
                    <H5 my="0px">Ralph Edwards</H5>
                    <FlexBox alignItems="center">
                      <Typography color="grey.600">Balance:</Typography>
                      <Typography ml={0.5} color="primary.main">
                        $500
                      </Typography>
                    </FlexBox>
                  </div>

                  <Typography color="grey.600" letterSpacing="0.2em">
                    SILVER USER
                  </Typography>
                </FlexBox>
              </Box>
            </Card>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              {infoList.map(item => <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
                  <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                p: '1rem 1.25rem'
              }}>
                    <H3 color="primary.main" my="0px" fontWeight="600">
                      {item.title}
                    </H3>
                    <Small color="grey.600" textAlign="center">
                      {item.subtitle}
                    </Small>
                  </Card>
                </Grid>)}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <TableRow sx={{
      p: '0.75rem 1.5rem'
    }}>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            First Name
          </Small>
          <span>Ralph</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Last Name
          </Small>
          <span>Edwards</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Email
          </Small>
          <span>ralfedwards@email.com</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Phone
          </Small>
          <span>+1983649392983</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5}>
            Birth date
          </Small>
          <span className="pre">
            {format(new Date(1996 / 11 / 16), 'dd MMM, yyyy')}
          </span>
        </FlexBox>
      </TableRow>
    </CustomerDashboardLayout>;
};

const infoList = [{
  title: '16',
  subtitle: 'All Orders'
}, {
  title: '02',
  subtitle: 'Awaiting Payments'
}, {
  title: '00',
  subtitle: 'Awaiting Shipment'
}, {
  title: '01',
  subtitle: 'Awaiting Delivery'
}];
export default Profile;