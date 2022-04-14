import Card1 from 'components/Card1';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import Place from '@mui/icons-material/Place';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as yup from 'yup';
import DashboardLayout from '../layout/CustomerDashboardLayout';

const AddressEditor = () => {
  // handle form submit
  const handleFormSubmit = async values => {
    console.log(values);
  };

  return <div>
      <DashboardPageHeader icon={Place} title="Add New Address" button={<Link href="/address">
            <Button color="primary" sx={{
        bgcolor: 'primary.light',
        px: '2rem'
      }}>
              Back to Address
            </Button>
          </Link>} navigation={<CustomerDashboardNavigation />} />

      <Card1>
        <Formik initialValues={initialValues} validationSchema={checkoutSchema} onSubmit={handleFormSubmit}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField name="name" label="Name" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ''} error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="address" label="Address Line" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.address || ''} error={!!touched.address && !!errors.address} helperText={touched.address && errors.address} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="contact" label="Phone" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.contact || ''} error={!!touched.contact && !!errors.contact} helperText={touched.contact && errors.contact} />
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>}
        </Formik>
      </Card1>
    </div>;
};

const initialValues = {
  name: '',
  address: '',
  contact: ''
};
const checkoutSchema = yup.object().shape({
  name: yup.string().required('required'),
  address: yup.string().required('required'),
  contact: yup.string().required('required')
});
AddressEditor.layout = DashboardLayout;
export default AddressEditor;