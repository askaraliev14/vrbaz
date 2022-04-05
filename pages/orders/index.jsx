import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerOrderList from 'components/orders/CustomerOrderList';
import React from 'react';

const Orders = () => {
  return <CustomerDashboardLayout>
      <CustomerOrderList />
    </CustomerDashboardLayout>;
};

export default Orders;