import NavLink from "../nav-link/NavLink";
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
export const DashboardNavigationWrapper = styled(Card)(({
  theme
}) => ({
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 64px)',
    boxShadow: 'none',
    overflowY: 'auto'
  }
}));
export const StyledDashboardNav = styled(({
  children,
  isCurrentPath,
  ...rest
}) => <NavLink {...rest}>{children}</NavLink>)(({
  theme,
  isCurrentPath
}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderLeft: '4px solid',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  marginBottom: '1.25rem',
  borderColor: isCurrentPath ? theme.palette.primary.main : 'transparent',
  '& .nav-icon': {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600]
  },
  '&:hover': {
    borderColor: theme.palette.primary.main,
    '& .nav-icon': {
      color: theme.palette.primary.main
    }
  }
}));