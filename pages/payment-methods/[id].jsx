import Card1 from 'components/Card1';
import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import CreditCard from '@mui/icons-material/CreditCard';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';

const PaymentMethodEditor = () => {
  const {
    query: {
      id
    }
  } = useRouter();

  const handleFormSubmit = async values => {
    console.log(values);
  };

  return <CustomerDashboardLayout>
      <DashboardPageHeader icon={CreditCard} title={`${id === 'add' ? 'Add New' : 'Edit'} Payment Method`} button={<Link href="/payment-methods">
            <Button color="primary" sx={{
        bgcolor: 'primary.light',
        px: '2rem'
      }}>
              Back to Payment Methods
            </Button>
          </Link>} />

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
                    <TextField name="card_no" label="Card Number" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.card_no || ''} error={!!touched.card_no && !!errors.card_no} helperText={touched.card_no && errors.card_no} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="name" label="Name on Card" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ''} error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="exp" label="Exp. Date" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.exp || ''} error={!!touched.exp && !!errors.exp} helperText={touched.exp && errors.exp} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="cvc" label="CVC" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.cvc || ''} error={!!touched.cvc && !!errors.cvc} helperText={touched.cvc && errors.cvc} />
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>}
        </Formik>
      </Card1>
    </CustomerDashboardLayout>;
};

const initialValues = {
  card_no: '',
  name: '',
  exp: '',
  cvc: ''
};
const checkoutSchema = yup.object().shape({
  name: yup.string().required('required'),
  card_no: yup.string().required('required'),
  exp: yup.string().required('required'),
  cvc: yup.string().required('required')
});
export default PaymentMethodEditor;