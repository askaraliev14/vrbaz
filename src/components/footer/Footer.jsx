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
const Footer = () => {
  return <footer>
      <Box bgcolor="#FFCD4E">
        <Container sx={{
        p: '1rem',
        color: 'white'
      }}>
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image  src="/assets/images/vrbaz-logoFooter.svg" alt="logo" />
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
                  О Нас
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => <Link href="/" key={ind}>
                      <StyledLink>{item}</StyledLink>
                    </Link>)}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white">
                  Служба Поддержки
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => <Link href="/" key={ind}>
                      <StyledLink>{item}</StyledLink>
                    </Link>)}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white">
                  Контакты
                </Box>
                <Box py={0.6} color="grey.500">
                  Uzbekistan, Tashkent
                </Box>
                <Box py={0.6} color="grey.500">
                  Email: info@vrbaz.uz
                </Box>
                <Box py={0.6} mb={2} color="grey.500">
                  Phone: +998 23 456 7890
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

const aboutLinks = ['Работа', 'Наши магазины', 'Условия и Соглашение', 'Политика конфиденциальности'];
const customerCareLinks = ['Центр помощи', 'Как купить', 'Отслеживать ваш заказ', 'Возвраты и возмещения'];
const iconList = [{
  icon: Facebook,
  url: 'https://www.facebook.com'
}, {
  icon: Twitter,
  url: 'https://twitter.com'
}, {
  icon: Youtube,
  url: 'https://www.youtube.com'
}, {
  icon: Google,
  url: '/'
}, {
  icon: Instagram,
  url: 'https://www.instagram.com'
}];
export default Footer;