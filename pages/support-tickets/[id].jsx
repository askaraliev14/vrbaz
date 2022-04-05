import FlexBox from 'components/FlexBox';
import CustomerService from 'components/icons/CustomerService';
import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import { H5, Span } from 'components/Typography';
import { Avatar, Button, Divider, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

const PaymentMethodEditor = () => {
  const handleFormSubmit = async values => {
    console.log(values);
  };

  return <CustomerDashboardLayout>
      <DashboardPageHeader icon={CustomerService} title="Support Ticket" button={<Link href="/support-tickets">
            <Button color="primary" sx={{
        px: '2rem',
        bgcolor: 'primary.light'
      }}>
              Back to Support Ticket
            </Button>
          </Link>} navigation={<CustomerDashboardNavigation />} />

      {messageList.map((item, ind) => <FlexBox mb={4} key={ind}>
          <Avatar src={item.imgUrl} sx={{
        mr: '1rem'
      }} />
          <Box>
            <H5 fontWeight="600" mt={0} mb={0}>
              {item.name}
            </H5>
            <Span color="grey.600">
              {format(new Date(item.date), 'hh:mm:a | dd MMM yyyy')}
            </Span>
            <Box borderRadius="10px" bgcolor="grey.200" p={2} mt={2}>
              {item.text}
            </Box>
          </Box>
        </FlexBox>)}

      <Divider sx={{
      mb: '2rem',
      borderColor: 'grey.300'
    }} />

      <TextField placeholder="Write your message here..." rows={8} fullWidth multiline sx={{
      mb: '1.5rem'
    }} />

      <Button variant="contained" color="primary" sx={{
      ml: 'auto',
      display: 'block'
    }} onClick={handleFormSubmit}>
        Post message
      </Button>
    </CustomerDashboardLayout>;
};

const messageList = [{
  imgUrl: '/assets/images/faces/face-7.jpg',
  name: 'Esther Howard',
  date: '2020-12-14T08:39:58.219Z',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit amet, aliquam massa tellus. Condimentum sit at pharetra, congue. Sit mattis amet nec pharetra odio. Interdum lorem vestibulum et amet et duis placerat. Ac mattis massa duis mi tellus sed. Mus eget in fames urna, ornare nunc, tincidunt tincidunt interdum. Amet aliquet pharetra rhoncus scelerisque pulvinar dictumst at sit. Neque tempor tellus ac nullam. Etiam massa tempor eu risus fusce aliquam.'
}, {
  imgUrl: '/assets/images/faces/10.jpg',
  name: 'Ralph Edwards',
  date: '2021-01-05T05:39:58.219Z',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit amet, aliquam massa tellus. Condimentum sit at pharetra, congue. Sit mattis amet nec pharetra odio. Interdum lorem vestibulum et amet et duis placerat.'
}, {
  imgUrl: '/assets/images/faces/face-7.jpg',
  name: 'Esther Howard',
  date: '2021-01-14T08:39:58.219Z',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc, lectus mi ornare. Bibendum proin euismod nibh tellus, phasellus.'
}];
export default PaymentMethodEditor;