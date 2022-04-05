import BazarButton from 'components/BazarButton';
import Image from 'components/BazarImage';
import BazarTextField from 'components/BazarTextField';
import FlexBox from 'components/FlexBox';
import { H3, H6, Small } from 'components/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Card, Checkbox, Divider, FormControlLabel, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { SERVER_URL } from 'constant';
const fbStyle = {
  background: '#3B5998',
  color: 'white'
};
const googleStyle = {
  background: '#4285F4',
  color: 'white'
};
const StyledCard = styled(({
  children,
  passwordVisibility,
  ...rest
}) => <Card {...rest}>{children}</Card>)(({
  theme,
  passwordVisibility
}) => ({
  width: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  '.content': {
    padding: '3rem 3.75rem 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '1.5rem 1rem 0px'
    }
  },
  '.passwordEye': {
    color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400]
  },
  '.facebookButton': {
    marginBottom: 10,
    '&:hover': fbStyle,
    ...fbStyle
  },
  '.googleButton': {
    '&:hover': googleStyle,
    ...googleStyle
  },
  '.agreement': {
    marginTop: 12,
    marginBottom: 24
  }
}));

const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useRouter();
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility(visible => !visible);
  }, []);

  const handleFormSubmit = async values => {
    try {
      const name = values.name.split(' ');
      const {
        data
      } = await axios.post(`${SERVER_URL}/auth/register`, {
        first_name: name[0],
        last_name: name[1],
        email: values.email,
        password: values.password
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: formSchema
  });
  return <StyledCard elevation={3} passwordVisibility={passwordVisibility}>
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          Create Your Account
        </H3>
        <Small fontWeight="600" fontSize="12px" color="grey.800" textAlign="center" mb={4.5} display="block">
          Please fill all fields to continue
        </Small>

        <BazarTextField mb={1.5} name="name" label="Full Name" placeholder="Ralph Adwards" variant="outlined" size="small" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ''} error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} />

        <BazarTextField mb={1.5} name="email" label="Email or Phone Number" placeholder="exmple@mail.com" variant="outlined" size="small" type="email" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.email || ''} error={!!touched.email && !!errors.email} helperText={touched.email && errors.email} />

        <BazarTextField mb={1.5} name="password" label="Password" placeholder="*********" autoComplete="on" type={passwordVisibility ? 'text' : 'password'} variant="outlined" size="small" fullWidth InputProps={{
        endAdornment: <IconButton size="small" type="button" onClick={togglePasswordVisibility}>
                {passwordVisibility ? <Visibility className="passwordEye" fontSize="small" /> : <VisibilityOff className="passwordEye" fontSize="small" />}
              </IconButton>
      }} onBlur={handleBlur} onChange={handleChange} value={values.password || ''} error={!!touched.password && !!errors.password} helperText={touched.password && errors.password} />

        <BazarTextField name="re_password" label="Retype Password" placeholder="*********" autoComplete="on" type={passwordVisibility ? 'text' : 'password'} variant="outlined" size="small" fullWidth InputProps={{
        endAdornment: <IconButton size="small" type="button" onClick={togglePasswordVisibility}>
                {passwordVisibility ? <Visibility className="passwordEye" fontSize="small" /> : <VisibilityOff className="passwordEye" fontSize="small" />}
              </IconButton>
      }} onBlur={handleBlur} onChange={handleChange} value={values.re_password || ''} error={!!touched.re_password && !!errors.re_password} helperText={touched.re_password && errors.re_password} />

        <FormControlLabel className="agreement" name="agreement" onChange={handleChange} control={<Checkbox size="small" color="secondary" checked={values.agreement || false} />} label={<FlexBox flexWrap="wrap" alignItems="center" justifyContent="flex-start">
              By signing up, you agree to
              <a href="/" target="_blank" rel="noreferrer noopener">
                <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                  Terms & Condtion
                </H6>
              </a>
            </FlexBox>} />

        <BazarButton variant="contained" color="primary" type="submit" fullWidth sx={{
        height: 44
      }}>
          Create Account
        </BazarButton>

        <Box mb={2} mt={3.3}>
          <Box width="200px" mx="auto">
            <Divider />
          </Box>

          <FlexBox justifyContent="center" mt={-1.625}>
            <Box color="grey.600" bgcolor="background.paper" px={2}>
              on
            </Box>
          </FlexBox>
        </Box>

        <BazarButton className="facebookButton" size="medium" fullWidth sx={{
        height: 44
      }}>
          <Image src="/assets/images/icons/facebook-filled-white.svg" alt="facebook" />
          <Box fontSize="12px" ml={1}>
            Continue with Facebook
          </Box>
        </BazarButton>
        <BazarButton className="googleButton" size="medium" fullWidth sx={{
        height: 44
      }}>
          <Image src="/assets/images/icons/google-1.svg" alt="facebook" />
          <Box fontSize="12px" ml={1}>
            Continue with Google
          </Box>
        </BazarButton>

        <FlexBox justifyContent="center" alignItems="center" my="1.25rem">
          <Box>Don’t have account?</Box>
          <Link href="/login">
            <a>
              <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                Log In
              </H6>
            </a>
          </Link>
        </FlexBox>
      </form>

      <FlexBox justifyContent="center" bgcolor="grey.200" py={2.5}>
        Forgot your password?
        <Link href="/">
          <a>
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              Reset It
            </H6>
          </a>
        </Link>
      </FlexBox>
    </StyledCard>;
};

const initialValues = {
  name: '',
  email: '',
  password: '',
  re_password: '',
  agreement: false
};
const formSchema = yup.object().shape({
  name: yup.string().required('${path} is required'),
  email: yup.string().email('invalid email').required('${path} is required'),
  password: yup.string().required('${path} is required'),
  re_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Please re-type password'),
  agreement: yup.bool().test('agreement', 'You have to agree with our Terms and Conditions!', value => value === true).required('You have to agree with our Terms and Conditions!')
});
export default Signup;