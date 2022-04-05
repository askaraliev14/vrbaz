import BazarImage from 'components/BazarImage';
import FlexBox from 'components/FlexBox';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Error404 = () => {
  const router = useRouter();

  const handleGoBack = async () => {
    router.back();
  };

  return <FlexBox flexDirection="column" minHeight="100vh" justifyContent="center" alignItems="center" px={2}>
      <BazarImage src="/assets/images/illustrations/404.svg" sx={{
      display: 'block',
      maxWidth: '320px',
      width: '100%',
      mb: '1.5rem'
    }} />
      <FlexBox flexWrap="wrap">
        <Button variant="outlined" color="primary" sx={{
        m: '0.5rem'
      }} onClick={handleGoBack}>
          Go Back
        </Button>
        <Link href="/">
          <Button variant="contained" color="primary" sx={{
          m: '0.5rem'
        }}>
            Go to Home
          </Button>
        </Link>
      </FlexBox>
    </FlexBox>;
};

export default Error404;