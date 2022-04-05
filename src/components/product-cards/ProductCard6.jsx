import HoverBox from 'components/HoverBox';
import LazyImage from 'components/LazyImage';
import { Card, Chip } from '@mui/material';
import React from 'react';

const ProductCard6 = ({
  title,
  subtitle,
  imgUrl
}) => {
  return <Card sx={{
    position: 'relative'
  }}>
      <Chip color="secondary" label={title} size="small" sx={{
      position: 'absolute',
      fontWeight: '600',
      fontSize: '10px',
      px: '8px',
      top: '0.875rem',
      left: '0.875rem',
      zIndex: 2
    }} />

      <Chip sx={{
      position: 'absolute',
      fontWeight: '600',
      fontSize: '10px',
      px: '8px',
      top: '0.875rem',
      right: '0.875rem',
      zIndex: 2
    }} label={subtitle} size="small" />

      <HoverBox position="relative" height="120px" borderRadius="8px">
        <LazyImage src={imgUrl} layout="fill" objectFit="cover" borderRadius="8px" />
      </HoverBox>
    </Card>;
};

export default ProductCard6;