import FlexBox from 'components/FlexBox';
import FacebookFilled from 'components/icons/FacebookFilled';
import InstagramFilled from 'components/icons/InstagramFilled';
import TwitterFilled from 'components/icons/TwitterFilled';
import YoutubeFilled from 'components/icons/YoutubeFilled';
import { H3, Small, Span } from 'components/Typography';
import Call from '@mui/icons-material/Call';
import Place from '@mui/icons-material/Place';
import { Avatar, Button, Card, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ShopIntroCard = () => {
  return <Card sx={{
    mb: '32px',
    pb: '20px'
  }}>
      <Box height="202px" sx={{
      height: '202px',
      background: 'url(/assets/images/banners/shop-cover.png) center/cover'
    }} />

      <FlexBox mt={-8} px={3.75} flexWrap="wrap">
        <Avatar src="/assets/images/faces/propic.png" sx={{
        height: '120px',
        width: '120px',
        mr: '37px',
        border: '4px solid',
        borderColor: 'grey.100'
      }} />

        <Box sx={{
        flex: '1 1 0',
        minWidth: '250px',
        '@media only screen and (max-width: 500px)': {
          marginLeft: 0
        }
      }}>
          <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center" mt={0.375} mb={3}>
            <Box bgcolor="secondary.main" borderRadius="4px" p="4px 16px" display="inline-block" my="8px">
              <H3 fontWeight="600" color="grey.100">
                Scarlett Beauty
              </H3>
            </Box>

            <FlexBox my="8px">
              {socialLinks.map((item, ind) => <a href={item.url} target="_blank" rel="noreferrer noopener" key={ind}>
                  <item.icon sx={{
                fontSize: '1.875rem',
                mr: ind < socialLinks.length - 1 ? '10px' : ''
              }} />
                </a>)}
            </FlexBox>
          </FlexBox>

          <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center">
            <Box>
              <FlexBox alignItems="center" mb={2}>
                <Rating color="warn" size="small" value={5} readOnly />
                <Small color="grey.600" pl={1.5} display="block">
                  (45)
                </Small>
              </FlexBox>

              <FlexBox color="grey.600" mb={1} maxWidth="270px">
                <Place fontSize="small" sx={{
                fontSize: '18px',
                mt: '3px'
              }} />
                <Span color="grey.600" ml={1.5}>
                  845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark
                </Span>
              </FlexBox>

              <FlexBox color="grey.600" mb={1}>
                <Call fontSize="small" sx={{
                fontSize: '18px',
                mt: '2px'
              }} />
                <Span color="grey.600" ml={1.5}>
                  (613) 343-9004
                </Span>
              </FlexBox>
            </Box>

            <a href="mailto:scarletbeauty@xmail.com">
              <Button variant="outlined" color="primary" sx={{
              my: '12px'
            }}>
                Contact Vendor
              </Button>
            </a>
          </FlexBox>
        </Box>
      </FlexBox>
    </Card>;
};

const socialLinks = [{
  icon: FacebookFilled,
  url: 'https://facebook.com'
}, {
  icon: TwitterFilled,
  url: 'https://twitter.com'
}, {
  icon: YoutubeFilled,
  url: 'https://youtube.com'
}, {
  icon: InstagramFilled,
  url: 'https://instagram.com'
}];
export default ShopIntroCard;