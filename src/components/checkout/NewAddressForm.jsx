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
  name: "Fazliddin",
  street1: "321, Amir Timur",
  street2: "",
  phone: "01789123456",
  city: "Tashkent",
  state: "Yashnabad",
  country: "Uzbekistan",
  zip: 100000
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
        Добавьте новый адрес
      </Button>
      <Dialog open={addCardForm} onClose={() => setAddCardForm(false)}>
        <DialogContent>
          <Typography variant="h6" mb={3}>
            Добавить информацию о новом адресе
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={3.5}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField fullWidth type="text" name="name" label="Введите ваше имя" value={values.name} error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} onChange={handleChange} />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField fullWidth type="text" name="street1" value={values.street1} label="Улица" error={touched.street1 && Boolean(errors.street1)} helperText={touched.street1 && errors.street1} onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth type="text" name="street2" value={values.street2} label="Адресная строка" error={touched.street2 && Boolean(errors.street2)} helperText={touched.street2 && errors.street2} onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth type="number" name="phone" value={values.phone} label="Введите свой телефон" error={touched.phone && Boolean(errors.phone)} helperText={touched.phone && errors.phone} onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="city" value={values.city} label="Город" error={touched.city && Boolean(errors.city)} helperText={touched.city && errors.city} onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField name="state" value={values.state} label="РаЙон" error={touched.state && Boolean(errors.state)} helperText={touched.state && errors.state} fullWidth onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField type="number" name="zip" value={values.zip} label="Zip" error={touched.zip && Boolean(errors.zip)} helperText={touched.zip && errors.zip} fullWidth onChange={handleChange} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField name="country" value={values.country} label="Страна" error={touched.country && Boolean(errors.country)} helperText={touched.country && errors.country} fullWidth onChange={handleChange} />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Button color="primary" variant="contained" type="submit">
                Сохранить форму
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>;
};

export default NewAddressForm;