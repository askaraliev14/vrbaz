import FlexBox from '../src/components/FlexBox';
import Login from '../src/components/sessions/Login';
import React from 'react';

const LoginPage = () => {
  return <FlexBox flexDirection="column" minHeight="100vh" alignItems="center" justifyContent="center">
      <Login />
    </FlexBox>;
};

export default LoginPage;