import AppStore from 'components/AppStore';
import BazarIconButton from 'components/BazarIconButton';
import Image from 'components/BazarImage';
import Facebook from 'components/icons/Facebook';
import Google from 'components/icons/Google';
import Instagram from 'components/icons/Instagram';
import Twitter from 'components/icons/Twitter';
import Youtube from 'components/icons/Youtube';
import { Paragraph } from 'components/Typography';
import { Box, Container, Grid, styled } from '@mui/material';
import Link from 'next/link';
import React, {Fragment} from 'react';
import FlexBox from '../FlexBox'; // styled component

const StyledLink = styled('a')(({
  theme
}) => ({
  position: 'relative',
  display: 'block',
  padding: '0.3rem 0rem',
  color: theme.palette.grey[500],
  cursor: 'pointer',
  borderRadius: 4,
  '&:hover': {
    color: theme.palette.grey[100]
  }
}));

// const Footer = () => {
//   return(
//       <Fragment/>
//   )
// }

const Footer = () => {
  return <footer>
      <Box bgcolor="#0c0e30">
        <Container sx={{
        p: '1rem',
        color: 'white'
      }}>
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image mb={2.5} src="/assets/images/logo-white.svg" alt="logo" />
                  </a>
                </Link>

                <Paragraph mb={2.5} color="grey.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </Paragraph>

                <AppStore />
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white">
                  About Us
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => <Link href="/" key={ind}>
                      <StyledLink>{item}</StyledLink>
                    </Link>)}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white">
                  Customer Care
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => <Link href="/" key={ind}>
                      <StyledLink>{item}</StyledLink>
                    </Link>)}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white">
                  Contact Us
                </Box>
                <Box py={0.6} color="grey.500">
                  70 Washington Square South, New York, NY 10012, United States
                </Box>
                <Box py={0.6} color="grey.500">
                  Email: uilib.help@gmail.com
                </Box>
                <Box py={0.6} mb={2} color="grey.500">
                  Phone: +1 1123 456 780
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => <a href={item.url} target="_blank" rel="noreferrer noopenner" key={ind}>
                      <BazarIconButton m={0.5} bgcolor="rgba(0,0,0,0.2)" fontSize="12px" padding="10px">
                        <item.icon fontSize="inherit" />
                      </BazarIconButton>
                    </a>)}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>;
};

const aboutLinks = ['Careers', 'Our Stores', 'Our Cares', 'Terms & Conditions', 'Privacy Policy'];
const customerCareLinks = ['Help Center', 'How to Buy', 'Track Your Order', 'Corporate & Bulk Purchasing', 'Returns & Refunds'];
const iconList = [{
  icon: Facebook,
  url: 'https://www.facebook.com/UILibOfficial'
}, {
  icon: Twitter,
  url: 'https://twitter.com/uilibofficial'
}, {
  icon: Youtube,
  url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg'
}, {
  icon: Google,
  url: '/'
}, {
  icon: Instagram,
  url: 'https://www.instagram.com/uilibofficial/'
}];
export default Footer;