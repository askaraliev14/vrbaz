import VendorAnalyticsChart from "src/components/dashboard/VendorAnalyticsChart";
import FlexBox from "src/components/FlexBox"
import DashboardPageHeader from 'src/components/layout/DashboardPageHeader';
import VendorDashboardLayout from 'src/components/layout/VendorDashboardLayout';
import { H1, H5, Paragraph } from 'src/components/Typography';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { Avatar, Card, Grid } from '@mui/material';
import React from 'react';

const VendorDashboard = () => {
  return <VendorDashboardLayout>
      <DashboardPageHeader title="Dashboard" icon={ShoppingBag} />

      <Grid container spacing={3}>
        {cardList.map((item, ind) => <Grid item lg={4} md={4} sm={6} xs={12} key={ind}>
            <Card sx={{
          textAlign: 'center',
          py: '1.5rem',
          height: '100%'
        }}>
              <H5 color="grey.600" mb={1}>
                {item.title}
              </H5>
              <H1 color="grey.700" mb={0.5} lineHeight="1.3">
                {item.amount}
              </H1>
              <Paragraph color="grey.600">{item.subtitle}</Paragraph>
            </Card>
          </Grid>)}

        <Grid item lg={8} xs={12}>
          <Card sx={{
          p: '20px 30px'
        }}>
            <H5 mb={3}>Sales</H5>
            <VendorAnalyticsChart />
          </Card>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Card sx={{
          p: '20px 30px'
        }}>
            <H5>Top Countries</H5>
            {topCountryList.map((item, ind) => <FlexBox alignItems="center" justifyContent="space-between" my="1rem" key={ind}>
                <FlexBox alignItems="center">
                  <Avatar src={item.flagUrl} sx={{
                mr: '8px',
                height: 30,
                width: 30
              }} />
                  <span>{item.name}</span>
                </FlexBox>
                <H5>${item.amount}</H5>
              </FlexBox>)}
          </Card>
        </Grid>
      </Grid>
    </VendorDashboardLayout>;
};

const cardList = [{
  title: 'Earnings (before taxes)',
  amount: '$30450.00',
  subtitle: 'after associated vendor fees'
}, {
  title: 'Your balance',
  amount: '$4000.00',
  subtitle: 'Will be processed on Feb 15, 2021'
}, {
  title: 'Pending Orders',
  amount: '08',
  subtitle: '7/3/2020 - 8/1/2020'
}]; // USE COUNTRY CODE TO FETCH FLAG

const topCountryList = [{
  name: 'United States',
  amount: 130,
  flagUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
}, {
  name: 'United Kingdom',
  amount: 110,
  flagUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'
}, {
  name: 'Canada',
  amount: 100,
  flagUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg'
}, {
  name: 'India',
  amount: 80,
  flagUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg'
}, {
  name: 'Jordan',
  amount: 80,
  flagUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/JO.svg'
}, {
  name: 'Brazil',
  amount: 70,
  flagUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg'
}];
export default VendorDashboard;