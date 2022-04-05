import FlexBox from 'components/FlexBox';
import Login from 'components/sessions/Login';
import React from 'react';

const LoginPage = () => {
  return <FlexBox flexDirection="column" minHeight="100vh" alignItems="center" justifyContent="center">
      <Login />
    </FlexBox>;
};

export default LoginPage;