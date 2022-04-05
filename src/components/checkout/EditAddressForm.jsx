import { Grid, Button, Dialog, TextField, Typography, DialogContent } from "@mui/material";
import * as yup from "yup";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
const checkoutSchema = yup.object({
  name: yup.string().required("required"),
  address1: yup.string().required("required"),
  address2: yup.string(),
  phone: yup.number().required("required")
});

const EditAddressForm = props => {
  const {
    addressData,
    selected,
    setAddressData,
    openEditForm,
    setOpenEditForm
  } = props;
  const initialValues = {
    name: selected.name,
    address1: selected.address1,
    address2: selected.address2,
    phone: selected.phone
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    onSubmit: values => {
      const updated = addressData.map(item => {
        if (item.name === selected.name) {
          return values;
        } else {
          return item;
        }
      });
      setAddressData(updated);

      if (updated) {
        setOpenEditForm(false);
      }
    }
  });
  return <Dialog open={openEditForm} onClose={() => setOpenEditForm(false)}>
      <DialogContent>
        <Typography variant="h6" mb={3}>
          Edit Address Information
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={3.5}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField name="name" label="Enter Your Name" value={formik.values.name} type="text" error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} fullWidth onChange={formik.handleChange} />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField type="text" name="address1" value={formik.values.address1} label="Address line 1" error={formik.touched.address1 && Boolean(formik.errors.address1)} helperText={formik.touched.address1 && formik.errors.address1} fullWidth onChange={formik.handleChange} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField type="text" name="address2" value={formik.values.address2} label="Address line 2" error={formik.touched.address2 && Boolean(formik.errors.address2)} helperText={formik.touched.address2 && formik.errors.address2} fullWidth onChange={formik.handleChange} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField type="number" name="phone" value={formik.values.phone} label="Enter Your Phone" error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} fullWidth onChange={formik.handleChange} />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button color="primary" variant="contained" type="submit">
              Submit Form
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>;
};

export default EditAddressForm;