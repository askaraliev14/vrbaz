import BazarButton from 'components/BazarButton';
import CategoryMenu from 'components/categories/CategoryMenu';
import FlexBox from 'components/FlexBox';
import Category from 'components/icons/Category';
import ShoppingBagOutlined from 'components/icons/ShoppingBagOutlined';
import MiniCart from 'components/mini-cart/MiniCart';
import GrocerySearchBox from 'components/search-box/GrocerySearchBox';
import Login from 'components/sessions/Login';
import { useAppContext } from 'contexts/app/AppContext';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import PersonOutline from '@mui/icons-material/PersonOutline';
import { Badge, Box, Container, Dialog, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { HeaderWrapper } from './Header'; // component props interface

const GroceryHeader = ({
  isFixed
}) => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const {
    state
  } = useAppContext();
  const {
    cartList
  } = state.cart;
  const cartHandle = <Badge badgeContent={cartList.length} color="primary">
      <Box component={IconButton} ml={2.5} bgcolor="grey.200" p={1.25} onClick={toggleSidenav}>
        <ShoppingBagOutlined />
      </Box>
    </Badge>;
  return <HeaderWrapper>
      <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%'
    }}>
        <FlexBox sx={{
        alignItems: 'center',
        mr: '1rem',
        minWidth: '170px',
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}>
          <Link href="/">
            <a>
              <img src="/assets/images/logo-black.svg" alt="logo" />
            </a>
          </Link>

          <Box sx={{
          visibility: isFixed ? 'visible' : 'hidden'
        }}>
            <CategoryMenu>
              <FlexBox color="grey.600" alignItems="center" ml={2}>
                <BazarButton color="inherit">
                  <Category fontSize="small" color="inherit" />
                  <KeyboardArrowDown fontSize="small" color="inherit" />
                </BazarButton>
              </FlexBox>
            </CategoryMenu>
          </Box>
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <GrocerySearchBox />
        </FlexBox>

        <FlexBox sx={{
        alignItems: 'center',
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}>
          <Box component={IconButton} ml={2} p={1.25} bgcolor="grey.200" onClick={toggleDialog}>
            <PersonOutline />
          </Box>
          {cartHandle}
        </FlexBox>

        <Dialog open={dialogOpen} fullWidth={isMobile} scroll="body" onClose={toggleDialog}>
          <Login />
        </Dialog>

        <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} SlideProps={{
        style: {
          overflow: 'hidden'
        }
      }}>
          <MiniCart toggleSidenav={toggleSidenav} />
        </Drawer>
      </Container>
    </HeaderWrapper>;
};

export default GroceryHeader;