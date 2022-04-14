import { Checkbox, FormControlLabel, Grid, MenuItem, TextField } from "@mui/material";
import * as yup from "yup";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
const checkoutSchema = yup.object({
  cardHolderName: yup.string().required("required"),
  cardNumber: yup.number().required("required"),
  cardMonth: yup.string().required("required"),
  cardYear: yup.number().required("required"),
  cardCVC: yup.number().required("required")
});
const initialValues = {
  cardHolderName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  cardCVC: ""
};

const AddCardForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return <form onSubmit={formik.handleSubmit}>
      <Box mb={3.5}>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <TextField name="cardHolderName" label="Enter Your Name" value={formik.values.cardHolderName} type="text" error={formik.touched.cardHolderName && Boolean(formik.errors.cardHolderName)} helperText={formik.touched.cardHolderName && formik.errors.cardHolderName} fullWidth onChange={formik.handleChange} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField type="number" name="cardNumber" value={formik.values.cardNumber} label="Enter Your Card Number" error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)} helperText={formik.touched.cardNumber && formik.errors.cardNumber} fullWidth onChange={formik.handleChange} />
          </Grid>
          <Grid item sm={12} xs={12}>
            <Box display="flex" justifyContent="space-between">
              <TextField type="number" name="cardMonth" value={formik.values.cardMonth} label="Expire Card Month" error={formik.touched.cardMonth && Boolean(formik.errors.cardMonth)} helperText={formik.touched.cardMonth && formik.errors.cardMonth} fullWidth select onChange={formik.handleChange}>
                {months.map(item => <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>)}
              </TextField>
              <TextField type="number" name="cardYear" value={formik.values.cardYear} label="Expire Card Year" error={formik.touched.cardYear && Boolean(formik.errors.cardYear)} helperText={formik.touched.cardYear && formik.errors.cardYear} fullWidth select onChange={formik.handleChange} sx={{
              mx: 3
            }}>
                {years.map(item => <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>)}
              </TextField>
              <TextField type="number" name="cardCVC" label="CVC/CVV" value={formik.values.cardCVC} error={formik.touched.cardCVC && Boolean(formik.errors.cardCVC)} helperText={formik.touched.cardCVC && formik.errors.cardCVC} fullWidth onChange={formik.handleChange} />
            </Box>
          </Grid>
        </Grid>
        <FormControlLabel sx={{
        mt: 1
      }} control={<Checkbox />} label="Save this card" />
      </Box>
      {
      /* <Box textAlign="center">
       <Button fullWidth color="primary" variant="contained" type="submit">
         Submit Form
       </Button>
      </Box> */
    }
    </form>;
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032];
export default AddCardForm;