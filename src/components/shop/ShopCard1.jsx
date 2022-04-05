import FlexBox from 'components/FlexBox';
import { H3, Span } from 'components/Typography';
import Call from '@mui/icons-material/Call';
import East from '@mui/icons-material/East';
import Place from '@mui/icons-material/Place';
import { alpha, Avatar, Card, IconButton, Rating, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';

const ShopCard1 = ({
  name,
  rating,
  address,
  phone,
  coverImgUrl,
  imgUrl,
  shopUrl
}) => {
  const theme = useTheme();
  return <Card>
      <Box sx={{
      color: 'white',
      p: '17px 30px 56px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `linear-gradient(
            to bottom,
             ${alpha(theme.palette.grey[900], 0.8)},
             ${alpha(theme.palette.grey[900], 0.8)}
          ), url(${coverImgUrl || '/assets/images/banners/cycle.png'})`
    }}>
        <H3 fontWeight="600" mb={1}>
          {name}
        </H3>

        <Rating value={rating || 0} color="warn" size="small" readOnly sx={{
        mb: '0.75rem'
      }} />

        <FlexBox mb={1}>
          <Place fontSize="small" sx={{
          fontSize: '18px',
          mt: '3px'
        }} />
          <Span color="white" ml={1.5}>
            {address}
          </Span>
        </FlexBox>

        <FlexBox>
          <Call fontSize="small" sx={{
          fontSize: '18px',
          mt: '2px'
        }} />
          <Span color="white" ml={1.5}>
            {phone}
          </Span>
        </FlexBox>
      </Box>

      <FlexBox pl="30px" pr={1} justifyContent="space-between">
        <Avatar src={imgUrl} sx={{
        height: 64,
        width: 64,
        mt: '-32px',
        border: '4px solid',
        borderColor: 'grey.100'
      }} />
        <Link href={shopUrl}>
          <a>
            <IconButton sx={{
            my: '0.25rem'
          }}>
              <East />
            </IconButton>
          </a>
        </Link>
      </FlexBox>
    </Card>;
};

export default ShopCard1;