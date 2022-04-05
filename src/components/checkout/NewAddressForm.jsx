import { Grid, Button, Dialog, TextField, Typography, DialogContent } from "@mui/material";
import * as yup from "yup";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React, { useState } from "react";
const checkoutSchema = yup.object({
  name: yup.string().required("required"),
  street1: yup.string().required("required"),
  street2: yup.string(),
  phone: yup.number().required("required"),
  city: yup.string().required("required"),
  state: yup.string().required("required"),
  country: yup.string().required("required"),
  zip: yup.number().required("required")
});
const initialValues = {
  name: "Ui Lib",
  street1: "321, Subid Bazar",
  street2: "",
  phone: "01789123456",
  city: "Sylhet",
  state: "Sylhet",
  country: "Bangladesh",
  zip: 4336
};

const NewAddressForm = ({
  setNewAddress
}) => {
  const [addCardForm, setAddCardForm] = useState(false);
  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values
  } = useFormik({
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    onSubmit: (values, {
      resetForm
    }) => {
      try {
        setNewAddress(values);

        if (values) {
          setAddCardForm(false);
          resetForm(initialValues);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  });
  return <>
      <Button color="primary" variant="outlined" sx={{
      p: "2px 20px"
    }} onClick={() => addCardForm ? setAddCardForm(false) : setAddCardForm(true)}>
        Add New Address
      </Button>
      <Dialog open={addCardForm} onClose={() => setAddCardForm(false)}>
        <DialogContent>
          <Typography variant="h6" mb={3}>
            Add New Address Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={3.5}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField fullWidth type="text" name="name" label="Enter Your Name" value={values.name} error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} onChange={handleChange} />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField fullWidth type="text" name="street1" value={values.street1} label="Street line 1" error={touched.street1 && Boolean(errors.street1)} helperText={touched.street1 && errors.street1} onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth type="text" name="street2" value={values.street2} label="Address line 2" error={touched.street2 && Boolean(errors.street2)} helperText={touched.street2 && errors.street2} onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth type="number" name="phone" value={values.phone} label="Enter Your Phone" error={touched.phone && Boolean(errors.phone)} helperText={touched.phone && errors.phone} onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="city" value={values.city} label="City" error={touched.city && Boolean(errors.city)} helperText={touched.city && errors.city} onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField name="state" value={values.state} label="State" error={touched.state && Boolean(errors.state)} helperText={touched.state && errors.state} fullWidth onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField type="number" name="zip" value={values.zip} label="Zip" error={touched.zip && Boolean(errors.zip)} helperText={touched.zip && errors.zip} fullWidth onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField name="country" value={values.country} label="Country" error={touched.country && Boolean(errors.country)} helperText={touched.country && errors.country} fullWidth onChange={handleChange} />
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
      </Dialog>
    </>;
};

export default NewAddressForm;