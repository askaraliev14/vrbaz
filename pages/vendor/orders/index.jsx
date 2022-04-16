import DashboardPageHeader from '/src/components/layout/DashboardPageHeader';
import VendorDashboardLayout from '/src/components/layout/VendorDashboardLayout';
import VendorOrderList from '/src/components/orders/VendorOrderList';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import React from 'react';

const Orders = () => {
  return <VendorDashboardLayout>
      <DashboardPageHeader title="Orders" icon={ShoppingBag} />
      <VendorOrderList />
    </VendorDashboardLayout>;
};

export default Orders;