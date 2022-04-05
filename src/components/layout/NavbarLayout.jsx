import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../navbar/Navbar';
import AppLayout from './AppLayout';

const NavbarLayout = ({
  children
}) => {
  return <AppLayout navbar={<Navbar />}>
      <Container sx={{
      my: '2rem'
    }}>{children}</Container>
    </AppLayout>;
};

export default NavbarLayout;