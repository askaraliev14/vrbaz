import CustomerDashboardLayout from '../../src/components/layout/CustomerDashboardLayout';
import CustomerOrderList from '../../src/components/orders/CustomerOrderList';
import React from 'react';

const Orders = () => {
  return <CustomerDashboardLayout>
      <CustomerOrderList />
    </CustomerDashboardLayout>;
};

export default Orders;