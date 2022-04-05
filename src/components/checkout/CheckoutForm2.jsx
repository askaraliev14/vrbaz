import Card1 from "components/Card1";
import FlexBox from "components/FlexBox";
import LazyImage from "components/LazyImage";
import { H6, Paragraph } from "components/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Avatar, Button, Card, Checkbox, FormControlLabel, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import NewAddressForm from "./NewAddressForm";
import EditAddressForm from "./EditAddressForm"; // date types

const CheckoutForm2 = () => {
  const [hasVoucher, setHasVoucher] = useState(false);
  const [dateList, setDateList] = useState([]);
  const router = useRouter();

  const handleFormSubmit = async values => {
    console.log(values);
    router.push("/payment");
  };

  const handleFieldValueChange = (value, fieldName, setFieldValue) => () => {
    setFieldValue(fieldName, value);
  };

  const toggleHasVoucher = () => {
    setHasVoucher(has => !has);
  };

  useEffect(() => {
    let list = [];
    let today = new Date();
    let dateCount = today.getDate();
    list.push({
      label: format(today, "dd MMMM"),
      value: today.toISOString()
    });

    for (let i = 1; i < 10; i++) {
      today.setDate(dateCount + i);
      list.push({
        label: format(today, "dd MMMM"),
        value: today.toISOString()
      });
    }

    setDateList(list);
  }, []);
  const [addressData, setAddressData] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  useEffect(() => {
    if (newAddress !== "") {
      setAddressData([newAddress, ...addressData]);
    } else {
      setAddressData(addressList2);
    }
  }, [newAddress]);

  const deleteAddress = name => {
    const newArr = addressData.filter(item => item.name !== name);
    setAddressData(newArr);
  };

  const [openEditForm, setOpenEditForm] = useState(false);
  const [selected, setSelected] = useState(false);

  const editHandler = value => {
    const data = addressData.find(item => item.name === value);
    setSelected(data);
    openEditForm ? setOpenEditForm(false) : setOpenEditForm(true);
  };

  return <Formik initialValues={initialValues} validationSchema={checkoutSchema} onSubmit={handleFormSubmit}>
      {({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      setFieldValue
    }) => <form onSubmit={handleSubmit}>
          <Card1 sx={{
        mb: "1.5rem"
      }}>
            <FlexBox alignItems="center" mb={3.5}>
              <Avatar sx={{
            backgroundColor: "primary.main",
            height: 32,
            width: 32,
            color: "primary.text",
            mr: "0.875rem"
          }}>
                1
              </Avatar>
              <Typography fontSize="20px">Delivery Date and Time</Typography>
            </FlexBox>

            <Box mb={3.5}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField type="text" name="date" label="Delivery Date" error={!!touched.date && !!errors.date} helperText={touched.date && errors.date} select fullWidth onChange={handleChange}>
                    {dateList.map(item => <MenuItem value={item.value} key={item.label}>
                        {item.label}
                      </MenuItem>)}
                  </TextField>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField type="text" name="time" label="Delivery Time" error={!!touched.time && !!errors.time} helperText={touched.time && errors.time} select fullWidth onChange={handleChange}>
                    {timeList.map(item => <MenuItem value={item.value} key={item.value}>
                        {item.value}
                      </MenuItem>)}
                  </TextField>
                </Grid>
              </Grid>
            </Box>
          </Card1>

          <Card1 sx={{
        mb: "1.5rem"
      }}>
            <FlexBox mb={3.5} alignItems="center" justifyContent="space-between">
              <FlexBox alignItems="center">
                <Avatar sx={{
              backgroundColor: "primary.main",
              color: "primary.text",
              mr: "0.875rem",
              height: 32,
              width: 32
            }}>
                  2
                </Avatar>
                <Typography fontSize="20px">Delivery Address</Typography>
              </FlexBox>

              <NewAddressForm setNewAddress={setNewAddress} />
            </FlexBox>

            <Typography mb={1.5}>Delivery Address</Typography>
            <Grid container spacing={3}>
              {addressData.map((item, ind) => <Grid item md={4} sm={6} xs={12} key={ind}>
                  <Card sx={{
              backgroundColor: "grey.100",
              p: "1rem",
              position: "relative",
              boxShadow: "none",
              border: "1px solid",
              cursor: "pointer",
              borderColor: item.address1 === values.address ? "primary.main" : "transparent"
            }} onClick={handleFieldValueChange(item.address1, "address", setFieldValue)}>
                    <FlexBox justifyContent="flex-end" sx={{
                position: "absolute",
                top: 5,
                right: 5
              }}>
                      {selected && <EditAddressForm openEditForm={openEditForm} setOpenEditForm={setOpenEditForm} selected={selected} addressData={addressData} setAddressData={setAddressData} />}
                      <IconButton size="small" sx={{
                  mr: 1
                }} onClick={() => editHandler(item.name)}>
                        <ModeEditOutlineIcon sx={{
                    fontSize: 20
                  }} />
                      </IconButton>
                      <IconButton onClick={() => deleteAddress(item.name)} color="error" size="small">
                        <DeleteOutlineIcon sx={{
                    fontSize: 20
                  }} />
                      </IconButton>
                    </FlexBox>
                    <H6 mb={0.5}>{item.name}</H6>
                    <Paragraph color="grey.700">{item.street1}</Paragraph>
                    {item.street2 && <Paragraph color="grey.700">{item.address2}</Paragraph>}
                    <Paragraph color="grey.700">{item.phone}</Paragraph>
                  </Card>
                </Grid>)}
            </Grid>
          </Card1>

          <Card1 sx={{
        mb: "1.5rem"
      }}>
            <FlexBox alignItems="center" mb={3.5}>
              <Avatar sx={{
            backgroundColor: "primary.main",
            color: "primary.text",
            mr: "0.875rem",
            height: 32,
            width: 32
          }}>
                3
              </Avatar>
              <Typography fontSize="20px">Payment Details</Typography>
            </FlexBox>

            <Box mb={3.5}>
              <Typography mb={1.5}>Enter Card Information</Typography>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField name="cardHolderName" label="Enter Your Name" type="text" error={!!touched.cardHolderName && !!errors.cardHolderName} helperText={touched.cardHolderName && errors.cardHolderName} fullWidth onChange={handleChange} />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField type="number" name="cardNumber" label="Enter Your Card Number" error={!!touched.cardNumber && !!errors.cardNumber} helperText={touched.cardNumber && errors.cardNumber} fullWidth onChange={handleChange} />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <Box display="flex" justifyContent="space-between">
                    <TextField type="number" name="cardMonth" label="Expire Card Month" error={!!touched.cardMonth && !!errors.cardMonth} helperText={touched.cardMonth && errors.cardMonth} fullWidth select onChange={handleChange}>
                      {months.map(item => <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>)}
                    </TextField>
                    <TextField type="number" name="cardYear" label="Expire Card Year" error={!!touched.cardYear && !!errors.cardYear} helperText={touched.cardYear && errors.cardYear} fullWidth select onChange={handleChange} sx={{
                  mx: 3
                }}>
                      {years.map(item => <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>)}
                    </TextField>
                    <TextField type="number" name="cardCVC" label="CVC/CVV" error={!!touched.cardCVC && !!errors.cardCVC} helperText={touched.cardCVC && errors.cardCVC} fullWidth onChange={handleChange} />
                  </Box>
                </Grid>
              </Grid>
              <FormControlLabel sx={{
            mt: 1
          }} control={<Checkbox />} label="Save this card" />
            </Box>
            <Box>
              <Typography mb={1.5}>Saved Cards</Typography>
              <Grid container spacing={3}>
                {paymentMethodList.map(item => <Grid item md={4} sm={6} xs={12} key={item.last4Digits}>
                    <Card sx={{
                backgroundColor: "grey.100",
                p: "1rem",
                boxShadow: "none",
                border: "1px solid",
                cursor: "pointer",
                borderColor: item.last4Digits === values.card ? "primary.main" : "transparent"
              }} onClick={handleFieldValueChange(item.last4Digits, "card", setFieldValue)}>
                      <Box height="24px" width="36px" position="relative" mb={1}>
                        <LazyImage src={`/assets/images/payment-methods/${item.cardType}.svg`} layout="fill" objectFit="contain" />
                      </Box>

                      <Paragraph color="grey.700">
                        **** **** **** {item.last4Digits}
                      </Paragraph>
                      <Paragraph color="grey.700">{item.name}</Paragraph>
                    </Card>
                  </Grid>)}
              </Grid>
            </Box>

            <Button sx={{
          color: "primary.main",
          mt: "1.5rem",
          lineHeight: 1
        }} onClick={toggleHasVoucher}>
              I have a voucher
            </Button>

            {hasVoucher && <FlexBox mt={3} maxWidth="400px">
                <TextField name="voucher" placeholder="Enter voucher code here" fullWidth value={values.voucher || ""} onChange={handleChange} />
                <Button variant="contained" color="primary" type="button" sx={{
            ml: "1rem"
          }}>
                  Apply
                </Button>
              </FlexBox>}

            <Button variant="contained" color="primary" type="submit" fullWidth sx={{
          mt: "1.5rem"
        }}>
              Place Order
            </Button>
          </Card1>
        </form>}
    </Formik>;
};

const addressList = [{
  addressType: "Home",
  address: "435 Bristol Avenue, Abington MA 2351"
}, {
  addressType: "Office",
  address: "777 Brockton Avenue, Abington MA 2351"
}, {
  addressType: "Office 2",
  address: "777 Kazi Avenue, Abington MA 2351"
}];
const addressList2 = [{
  name: "UI-Lib1",
  street1: "375 Subidbazar, MA 2351",
  street2: "435 Bristol, MA 2351",
  phone: "+17804084466"
}, {
  name: "UI-Lib2",
  street1: "645 Bondorbazar, MA 2351",
  street2: "968 Brockton, MA 2351",
  phone: "+18334271710"
}, {
  name: "UI-Lib3",
  street1: "324 Ambarkhana, MA 2351",
  street2: "777 Kazi, MA 2351",
  phone: "+17754739407"
}];
const paymentMethodList = [{
  cardType: "Amex",
  last4Digits: "4765",
  name: "Jaslynn Land"
}, {
  cardType: "Mastercard",
  last4Digits: "5432",
  name: "Jaslynn Land"
}, {
  cardType: "Visa",
  last4Digits: "4543",
  name: "Jaslynn Land"
}];
const timeList = [{
  label: "9AM - 11AM",
  value: "9AM - 11AM"
}, {
  label: "11AM - 1PM",
  value: "11AM - 1PM"
}, {
  label: "3PM - 5PM",
  value: "3PM - 5PM"
}, {
  label: "5PM - 7PM",
  value: "5PM - 7PM"
}];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032];
const initialValues = {
  card: "",
  date: "",
  time: "",
  address: "",
  voucher: "",
  cardHolderName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  cardCVC: ""
};
const checkoutSchema = yup.object().shape({
  card: yup.string().required("required"),
  date: yup.string().required("required"),
  time: yup.string().required("required"),
  address: yup.string().required("required"),
  cardHolderName: yup.string().required("required"),
  cardNumber: yup.number().required("required"),
  cardMonth: yup.string().required("required"),
  cardYear: yup.number().required("required"),
  cardCVC: yup.number().required("required"),
  voucher: yup.string()
});
export default CheckoutForm2;