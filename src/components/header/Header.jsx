import BazarButton from "components/BazarButton";
import Image from "components/BazarImage";
import CategoryMenu from "components/categories/CategoryMenu";
import FlexBox from "components/FlexBox";
import Category from "components/icons/Category";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";
import MiniCart from "components/mini-cart/MiniCart";
import Login from "components/sessions/Login";
import { useAppContext } from "contexts/app/AppContext";
import PersonOutline from "@mui/icons-material/PersonOutline";
import {
  Badge,
  Box,
  Container,
  Dialog,
  Drawer,
  IconButton,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { layoutConstant } from "utils/constants";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import SearchBox from "../search-box/SearchBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WishList from "../../../pages/wish-list";
import NavbarCategory from "../navbar/NavbarCategory";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// styled component
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  height: layoutConstant.headerHeight,
  background: theme.palette.background.paper,
  transition: "height 250ms ease-in-out",
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}));

const Header = ({ isFixed, className }) => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [wishLishOpen, setWishListOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const toggleWishList = () => setWishListOpen(!wishLishOpen);

  const { state } = useAppContext();
  const { cartList } = state.cart;
  const cartHandle = (
    <Badge badgeContent={cartList.length} color="primary">
      <Box
        component={IconButton}
        onClick={toggleSidenav}
        fontSize={14}
        sx={{
          display: "flex",
          // alignItems: "center",
          // flexWrap: "wrap",
          flexDirection: "column",
          // "&:hover": {
          //   display: "none",
          // },
          width: "50px",
          height: "45px",
          margin: "0 5px",
          // marginTop: "7px",
          backgroundColor: "#FFF",
          "&:hover": {
            backgroundColor: "#FFF"

          },
        }}
      >
        <ShoppingCartOutlinedIcon />
        <span>Корзина</span>
      </Box>
    </Badge>
  );
  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <FlexBox
          alignItems="center"
          mr={2}
          minWidth="170px"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Link href="/">
            <a>
              <Image
                height={90}
                mb={0.5}
                src="/assets/images/vrbaz-logo.svg"
                alt="logo"
              />
            </a>
          </Link>
        </FlexBox>
        <FlexBox justifyContent="center" flex="1 1 0">
          <SearchBox />
        </FlexBox>
        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll="body"
          onClose={toggleDialog}
        >
          <Login />
        </Dialog>
        <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav}>
          <MiniCart />
        </Drawer>
        <FlexBox
          alignItems="center"
          justifyContent="space-between"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Box
            component={IconButton}
            // mr={2}
            ml={2}
            fontSize={14}
            sx={{
              backgroundColor: "#FFF",
              "&:hover": {
                backgroundColor: "#FFF"
              },
              // display: "flex",
              // alignItems: "center",
              // flexWrap: "wrap",
              flexDirection: "column",
              // "&:hover": {
              //   display: "none",
              // },
            }}
          >
            <FavoriteBorderIcon />
            <span>Избранное</span>
          </Box>
          {cartHandle}
          <Box
            component={IconButton}
            // ml={2}
            mr={2}
            fontSize={14}
            // bgcolor="grey.200"
            onClick={toggleDialog}
            label="Login"

            sx={{
              backgroundColor: "#FFF",
              "&:hover": {
                backgroundColor: "#FFF"
              },
              // display: "flex",
              // alignItems: "center",
              // flexWrap: "wrap",
              flexDirection: "column",
              // "&:hover": {
              //   display: "none",
              // },
            }}
          >
            <PersonOutline />
            <span>Войти</span>
          </Box>
        </FlexBox>
        <NavbarCategory />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
