import { Container, Grid } from '@mui/material';
import React from 'react';
import Navbar from '../navbar/Navbar';
import AppLayout from './AppLayout';
import VendorDashboardNavigation from './VendorDashboardNavigation';

const VendorDashboardLayout = ({
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
          <VendorDashboardNavigation />
        </Grid>
        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  </AppLayout>;

export default VendorDashboardLayout;