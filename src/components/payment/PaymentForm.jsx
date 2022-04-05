import Card1 from 'components/Card1';
import FlexBox from 'components/FlexBox';
import useWindowSize from 'hooks/useWindowSize';
import { Button, Divider, FormControlLabel, Grid, Radio, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import * as yup from 'yup';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const width = useWindowSize();
  const router = useRouter();
  const isMobile = width < 769;

  const handleFormSubmit = async values => {
    console.log(values);
    router.push('/payment');
  };

  const handlePaymentMethodChange = ({
    target: {
      name
    }
  }) => {
    setPaymentMethod(name);
  };

  return <Fragment>
      <Card1 sx={{
      mb: '2rem'
    }}>
        <FormControlLabel name="credit-card" label={<Typography fontWeight="600">Pay with credit card</Typography>} control={<Radio checked={paymentMethod === 'credit-card'} color="secondary" size="small" />} sx={{
        mb: '1.5rem'
      }} onChange={handlePaymentMethodChange} />

        <Divider sx={{
        mb: '1.25rem',
        mx: '-2rem'
      }} />

        {paymentMethod === 'credit-card' && <Formik initialValues={initialValues} validationSchema={checkoutSchema} onSubmit={handleFormSubmit}>
            {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <TextField name="card_no" label="Card Number" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.card_no || ''} helperText={touched.card_no && errors.card_no} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField name="exp_date" label="Exp Date" placeholder="MM/YY" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.exp_date || ''} helperText={touched.exp_date && errors.exp_date} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField name="name" label="Name on Card" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ''} helperText={touched.name && errors.name} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField name="name" label="Name on Card" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ''} helperText={touched.name && errors.name} />
                    </Grid>
                  </Grid>
                </Box>

                <Button variant="outlined" color="primary" sx={{
            mb: '30px'
          }}>
                  Submit
                </Button>

                <Divider sx={{
            mb: '1.5rem',
            mx: '-2rem'
          }} />
              </form>}
          </Formik>}

        <FormControlLabel name="paypal" label={<Typography fontWeight="600">Pay with Paypal</Typography>} control={<Radio checked={paymentMethod === 'paypal'} color="secondary" size="small" />} sx={{
        mb: '1.5rem'
      }} onChange={handlePaymentMethodChange} />

        <Divider sx={{
        mb: '1.5rem',
        mx: '-2rem'
      }} />

        {paymentMethod === 'paypal' && <Fragment>
            <FlexBox alignItems="flex-end" mb={4}>
              <TextField name="email" label="Paypal Email" type="email" fullWidth sx={{
            mr: isMobile ? '1rem' : '30px'
          }} />
              <Button variant="outlined" color="primary" type="button">
                Submit
              </Button>
            </FlexBox>

            <Divider sx={{
          mb: '1.5rem',
          mx: '-2rem'
        }} />
          </Fragment>}

        <FormControlLabel name="cod" label={<Typography fontWeight="600">Cash On Delivery</Typography>} control={<Radio checked={paymentMethod === 'cod'} color="secondary" size="small" />} onChange={handlePaymentMethodChange} />
      </Card1>

      <Grid container spacing={7}>
        <Grid item sm={6} xs={12}>
          <Link href="/checkout">
            <Button variant="outlined" color="primary" type="button" fullWidth>
              Back to checkout details
            </Button>
          </Link>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Link href="/orders">
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Review
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>;
};

const initialValues = {
  card_no: '',
  name: '',
  exp_date: '',
  cvc: '',
  shipping_zip: '',
  shipping_country: '',
  shipping_address1: '',
  shipping_address2: '',
  billing_name: '',
  billing_email: '',
  billing_contact: '',
  billing_company: '',
  billing_zip: '',
  billing_country: '',
  billing_address1: '',
  billing_address2: ''
};
const checkoutSchema = yup.object().shape({
  card_no: yup.string().required('required'),
  name: yup.string().required('required'),
  exp_date: yup.string().required('required'),
  cvc: yup.string().required('required') // shipping_zip: yup.string().required("required"),
  // shipping_country: yup.object().required("required"),
  // shipping_address1: yup.string().required("required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.string().required("required"),
  // billing_address1: yup.string().required("required"),

});
export default PaymentForm;