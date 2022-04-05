import { bgcolor, borderRadius, compose, spacing, styled } from '@mui/system';
import NextImage from 'next/image';
import React from 'react';
const LazyImage = styled(({
  borderRadius,
  ...rest
}) => <NextImage {...rest} />)(compose(spacing, borderRadius, bgcolor));
export default LazyImage;