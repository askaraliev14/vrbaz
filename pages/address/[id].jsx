import AddressEditor from 'components/address/AddressEditor';
import DashboardLayout from 'components/layout/CustomerDashboardLayout';
import React from 'react';

const AddressUpdater = () => {
  return <DashboardLayout>
      <AddressEditor />
    </DashboardLayout>;
};

export default AddressUpdater;