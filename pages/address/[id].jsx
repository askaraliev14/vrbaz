import AddressEditor from '../../src/components/address/AddressEditor';
import DashboardLayout from '../../src/components/layout/CustomerDashboardLayout';
import React from 'react';

const AddressUpdater = () => {
  return <DashboardLayout>
      <AddressEditor />
    </DashboardLayout>;
};

export default AddressUpdater;