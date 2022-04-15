import DropZone from 'components/DropZone';
import DeliveryBox from 'components/icons/DeliveryBox';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import VendorDashboardLayout from 'components/layout/VendorDashboardLayout';
import { Button, Card, Grid, MenuItem, TextField } from '@mui/material';
import { Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as yup from 'yup';

const OrderDetails = () => {
  const handleFormSubmit = async values => {
    console.log(values);
  };

  return <VendorDashboardLayout>
      <DashboardPageHeader title="Add Product" icon={DeliveryBox} button={<Link href="/vendor/products">
            <Button color="primary" sx={{
        bgcolor: 'primary.light',
        px: '2rem'
      }}>
              Back to Product List
            </Button>
          </Link>} />

      <Card sx={{
      p: '30px'
    }}>
        <Formik initialValues={initialValues} validationSchema={checkoutSchema} onSubmit={handleFormSubmit}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField name="name" label="Name" placeholder="Name" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ''} error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField name="category" label="Select Category" placeholder="Category" fullWidth select onBlur={handleBlur} onChange={handleChange} value={values.category || ''} error={!!touched.category && !!errors.category} helperText={touched.category && errors.category}>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="fashion">Fashion</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <DropZone onChange={files => {
                console.log(files);
              }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="description" label="Description" placeholder="Description" rows={6} multiline fullWidth onBlur={handleBlur} onChange={handleChange} value={values.description || ''} error={!!touched.description && !!errors.description} helperText={touched.description && errors.description} />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField name="stock" label="Stock" placeholder="Stock" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.stock || ''} error={!!touched.stock && !!errors.stock} helperText={touched.stock && errors.stock} />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField name="tags" label="Tags" placeholder="Tags" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.tags || ''} error={!!touched.tags && !!errors.tags} helperText={touched.tags && errors.tags} />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField name="price" label="Regular Price" placeholder="Regular Price" type="number" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.price || ''} error={!!touched.price && !!errors.price} helperText={touched.price && errors.price} />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField name="sale_price" label="Sale Price" placeholder="Sale Price" type="number" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.sale_price || ''} error={!!touched.sale_price && !!errors.sale_price} helperText={touched.sale_price && errors.sale_price} />
                </Grid>
              </Grid>
              <Button variant="contained" color="primary" type="submit" sx={{
            mt: '25px'
          }}>
                Save product
              </Button>
            </form>}
        </Formik>
      </Card>
    </VendorDashboardLayout>;
};

const initialValues = {
  name: '',
  stock: '',
  price: '',
  sale_price: '',
  description: '',
  tags: '',
  category: ''
};
const checkoutSchema = yup.object().shape({
  name: yup.string().required('required'),
  category: yup.string().required('required'),
  description: yup.string().required('required'),
  stock: yup.number().required('required'),
  price: yup.number().required('required'),
  sale_price: yup.number().required('required'),
  tags: yup.object().required('required')
});
export default OrderDetails;