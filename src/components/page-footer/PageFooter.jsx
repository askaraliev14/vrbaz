import AppStore from 'components/AppStore';
import BazarIconButton from 'components/BazarIconButton';
import BazarImage from 'components/BazarImage';
import Facebook from 'components/icons/Facebook';
import Google from 'components/icons/Google';
import Instagram from 'components/icons/Instagram';
import Twitter from 'components/icons/Twitter';
import Youtube from 'components/icons/Youtube';
import { Paragraph } from 'components/Typography';
import { Box, Container, Grid, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import FlexBox from '../FlexBox'; // styled components

const StyledFooter = styled('footer')(({
  theme,
  bgcolor
}) => ({
  padding: '40px',
  color: 'white',
  // marginBottom: "1rem",
  background: bgcolor ? bgcolor : theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    marginBottom: '4rem'
  }
}));
const StyledLink = styled('a')(({
  theme
}) => ({
  position: 'relative',
  display: 'block',
  padding: '0.3rem 0rem',
  color: theme.palette.grey[300],
  cursor: 'pointer',
  borderRadius: 4,
  '&:hover': {
    color: theme.palette.grey[100]
  }
}));

const PageFooter = ({
  sx,
  id,
  bgcolor
}) => {
  return <StyledFooter id={id} sx={sx} bgcolor={bgcolor}>
      <Container>
        <Link href="/">
          <a>
            <BazarImage mb={2.5} src="/assets/images/logo-white.svg" alt="logo" />
          </a>
        </Link>
        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
            <Paragraph mb={2.5} color="grey.300" maxWidth="370px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Paragraph>

            <AppStore />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <Box mt={-0.6}>
              {customerCareLinks.map((item, ind) => <Link href="/" key={ind}>
                  <StyledLink>{item}</StyledLink>
                </Link>)}
            </Box>

            <FlexBox className="flex" mx={-0.625} mt={2}>
              {iconList.map((item, ind) => <a href={item.url} target="_blank" rel="noreferrer noopenner" key={ind}>
                  <BazarIconButton m={0.5} bgcolor="rgba(0,0,0,0.2)" fontSize="12px" padding="10px">
                    <item.icon fontSize="inherit" />
                  </BazarIconButton>
                </a>)}
            </FlexBox>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>;
};

const customerCareLinks = ['Help Center', 'Track Your Order', 'Corporate & Bulk Purchasing', 'Returns & Refunds'];
const iconList = [{
  icon: Facebook,
  url: 'https://www.facebook.com/UILibOfficial'
}, {
  icon: Twitter,
  url: '/'
}, {
  icon: Youtube,
  url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg'
}, {
  icon: Google,
  url: '/'
}, {
  icon: Instagram,
  url: '/'
}];
export default PageFooter;