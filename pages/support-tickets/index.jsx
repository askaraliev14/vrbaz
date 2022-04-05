import FlexBox from 'components/FlexBox';
import CustomerService from 'components/icons/CustomerService';
import CustomerDashboardLayout from 'components/layout/CustomerDashboardLayout';
import CustomerDashboardNavigation from 'components/layout/CustomerDashboardNavigation';
import DashboardPageHeader from 'components/layout/DashboardPageHeader';
import TableRow from 'components/TableRow';
import { Span } from 'components/Typography';
import East from '@mui/icons-material/East';
import { Chip, IconButton, Pagination, Typography } from '@mui/material';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

const TicketList = () => {
  return <CustomerDashboardLayout>
      <DashboardPageHeader title="Support Ticket" icon={CustomerService} navigation={<CustomerDashboardNavigation />} />

      {[1, 2, 3].map(item => <Link href="/support-tickets/xkssThds6h37sd" key={item}>
          <TableRow sx={{
        my: '1rem',
        p: '15px 24px'
      }}>
            <div>
              <span>My product is broken. I need refund</span>
              <FlexBox alignItems="center" flexWrap="wrap" pt={1} m={-0.75}>
                <Chip label="Urgent" size="small" sx={{
              height: 26,
              px: '0.25rem',
              bgcolor: 'primary.light',
              color: 'primary.main',
              m: '6px'
            }} />
                <Chip label="Open" size="small" sx={{
              height: 26,
              px: '0.25rem',
              bgcolor: 'success.100',
              color: 'success.main',
              m: '6px'
            }} />
                <Span className="pre" m={0.75} color="grey.600">
                  {format(new Date('2020/10/12'), 'MMM dd, yyyy')}
                </Span>
                <Span m={0.75} color="grey.600">
                  Website Problem
                </Span>
              </FlexBox>
            </div>

            <Typography flex="0 0 0 !important" textAlign="center" color="grey.600">
              <IconButton>
                <East fontSize="small" color="inherit" />
              </IconButton>
            </Typography>
          </TableRow>
        </Link>)}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={5} variant="outlined" color="primary" onChange={data => {
        console.log(data);
      }} />
      </FlexBox>
    </CustomerDashboardLayout>;
};

export default TicketList;