import Card1 from 'components/Card1';
import FlexBox from 'components/FlexBox';
import { Divider, Typography } from '@mui/material';
import React from 'react';

const PaymentSummary = () => {
  return <Card1>
      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Subtotal:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            $2610.
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Shipping:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Tax:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            $40.
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
        <Typography color="grey.600">Discount:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>

      <Divider sx={{
      mb: '1rem'
    }} />

      <Typography fontSize="25px" fontWeight="600" lineHeight="1" textAlign="right">
        $2610.00
      </Typography>
    </Card1>;
};

export default PaymentSummary;