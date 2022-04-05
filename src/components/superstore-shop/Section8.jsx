import LazyImage from 'components/LazyImage';
import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Section8 = () => {
  return <Container sx={{
    mb: '70px'
  }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Link href="/">
            <a>
              <LazyImage src="/assets/images/banners/banner-1.png" height={342} width={385} layout="responsive" objectFit="contain" alt="banner" />
            </a>
          </Link>
        </Grid>
        <Grid item xs={12} md={8}>
          <Link href="/">
            <a>
              <LazyImage src="/assets/images/banners/banner-2.png" height={342} width={790} layout="responsive" objectFit="contain" alt="banner" />
            </a>
          </Link>
        </Grid>
      </Grid>
    </Container>;
};

export default Section8;