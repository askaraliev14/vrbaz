import Card1 from 'src/components/Card1';
import DashboardPageHeader from 'src/components/layout/DashboardPageHeader';
import VendorDashboardLayout from 'src/components/layout/VendorDashboardLayout';
import countryList from 'src/data/countryList';
import CameraAlt from '@mui/icons-material/CameraAlt';
import Settings from '@mui/icons-material/Settings';
import { Autocomplete, Avatar, Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const AccountSettings = () => {
  const handleFormSubmit = async values => {
    console.log(values);
  };

  return <VendorDashboardLayout>
      <DashboardPageHeader title="Account" icon={Settings} />

      {
      /* p="24px 30px" */
    }
      <Card1>
        <Box borderRadius="10px" overflow="hidden" height="173px" mb={3} position="relative" style={{
        background: 'url(/assets/images/banners/banner-10.png) center/cover'
      }}>
          <Box display="flex" alignItems="flex-end" position="absolute" bottom="20px" left="24px">
            <Avatar src="/assets/images/faces/propic(9).png" sx={{
            height: 80,
            width: 80,
            border: '4px solid',
            borderColor: 'grey.100'
          }} />

            <Box ml={-2.5} zIndex={12}>
              <label htmlFor="profile-image">
                <Button component="span" size="small" color="secondary" sx={{
                bgcolor: 'grey.300',
                height: 'auto',
                p: '6px',
                borderRadius: '50%'
              }}>
                  <CameraAlt fontSize="small" />
                </Button>
              </label>
            </Box>
            <input onChange={e => console.log(e.target.files)} id="profile-image" accept="image/*" type="file" style={{
            display: 'none'
          }} />
          </Box>

          <Box display="flex" alignItems="flex-end" position="absolute" top="20px" right="24px">
            <label htmlFor="cover-image">
              <Button component="span" size="small" color="secondary" sx={{
              bgcolor: 'primary.light',
              height: 'auto',
              p: '6px',
              borderRadius: '50%'
            }}>
                <CameraAlt fontSize="small" color="primary" />
              </Button>
            </label>
            <input className="hidden" onChange={e => console.log(e.target.files)} id="cover-image" accept="image/*" type="file" style={{
            display: 'none'
          }} />
          </Box>
        </Box>

        <Formik initialValues={initialValues} validationSchema={accountSchema} onSubmit={handleFormSubmit}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        }) => <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField name="first_name" label="First Name" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.first_name || ''} error={!!touched.first_name && !!errors.first_name} helperText={touched.first_name && errors.first_name} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="last_name" label="Last Name" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.last_name || ''} error={!!touched.last_name && !!errors.last_name} helperText={touched.last_name && errors.last_name} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="email" type="email" label="Email" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.email || ''} error={!!touched.email && !!errors.email} helperText={touched.email && errors.email} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="contact" label="Phone" fullWidth type="tel" onBlur={handleBlur} onChange={handleChange} value={values.contact || ''} error={!!touched.contact && !!errors.contact} helperText={touched.contact && errors.contact} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Autocomplete options={countryList} getOptionLabel={option => option.label || ''} value={values.country} fullWidth onChange={(_e, value) => setFieldValue('country', value)} renderInput={params => <TextField label="Country" placeholder="Select Country" error={!!touched.country && !!errors.country} helperText={touched.country && errors.country} {...params} />} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField name="city" label="City" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.city || ''} error={!!touched.city && !!errors.city} helperText={touched.city && errors.city} />
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>}
        </Formik>
      </Card1>
    </VendorDashboardLayout>;
};

const initialValues = {
  first_name: '',
  last_name: '',
  country: null,
  city: '',
  email: '',
  contact: ''
};
const accountSchema = yup.object().shape({
  first_name: yup.string().required('required'),
  last_name: yup.string().required('required'),
  country: yup.mixed().required('required'),
  city: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  contact: yup.string().required('required')
});
export default AccountSettings;