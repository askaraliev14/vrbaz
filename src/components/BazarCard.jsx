import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
const BazarCard = styled(({
  hoverEffect,
  children,
  ...rest
}) => <Card {...rest}>{children}</Card>)(({
  theme,
  hoverEffect
}) => ({
  borderRadius: '8px',
  overflow: 'unset',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: hoverEffect ? theme.shadows[3] : ''
  }
}));
BazarCard.defaultProps = {
  hoverEffect: false
};
export default BazarCard;