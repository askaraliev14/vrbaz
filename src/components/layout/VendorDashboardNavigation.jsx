import FlexBox from 'components/FlexBox';
import Assignment from '@mui/icons-material/Assignment';
import Dashboard from '@mui/icons-material/Dashboard';
import NoteAdd from '@mui/icons-material/NoteAdd';
import Settings from '@mui/icons-material/Settings';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
import React from 'react';
import { DashboardNavigationWrapper, StyledDashboardNav } from './DashboardStyle';

const VendorDashboardNavigation = () => {
  const {
    pathname
  } = useRouter();
  return <DashboardNavigationWrapper sx={{
    px: '0px',
    py: '1.5rem',
    color: 'grey.900'
  }}>
      {linkList.map(item => <StyledDashboardNav isCurrentPath={pathname.includes(item.href)} href={item.href} key={item.title}>
          <FlexBox alignItems="center">
            <item.icon className="nav-icon" fontSize="small" color="inherit" sx={{
          mr: '10px'
        }} />

            <span>{item.title}</span>
          </FlexBox>
          <span>{item.count}</span>
        </StyledDashboardNav>)}
    </DashboardNavigationWrapper>;
};

const linkList = [{
  href: '/vendor/dashboard',
  title: 'Dashboard',
  icon: Dashboard
}, {
  href: '/vendor/products',
  title: 'Products',
  icon: Assignment,
  count: 300
}, {
  href: '/vendor/add-product',
  title: 'Add New Product',
  icon: NoteAdd
}, {
  href: '/vendor/orders',
  title: 'Orders',
  icon: ShoppingCart,
  count: 40
}, {
  href: '/vendor/account-settings',
  title: 'Account Settings',
  icon: Settings
}];
export default VendorDashboardNavigation;