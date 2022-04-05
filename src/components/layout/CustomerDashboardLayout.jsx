import Navbar from "../navbar/Navbar";
import { Container, Grid } from '@mui/material';
import React from 'react';
import AppLayout from "./AppLayout";
import CustomerDashboardNavigation from './CustomerDashboardNavigation';

const CustomerDashboardLayout = ({
  children
}) => <AppLayout navbar={<Navbar />}>
    <Container sx={{
    my: '2rem'
  }}>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={12} sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block'
        }
      }}>
          <CustomerDashboardNavigation />
        </Grid>
        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  </AppLayout>;

export default CustomerDashboardLayout;