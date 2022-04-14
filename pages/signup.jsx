import FlexBox from '../src/components/FlexBox';
import Signup from '../src/components/sessions/Signup';
import React from 'react';

const SignUpPage = () => {
  return <FlexBox flexDirection="column" minHeight="100vh" alignItems="center" justifyContent="center">
      <Signup />
    </FlexBox>;
};

export default SignUpPage;