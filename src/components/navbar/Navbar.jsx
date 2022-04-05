import BazarButton from "components/BazarButton";
import BazarCard from "components/BazarCard";
import CategoryMenu from "components/categories/CategoryMenu";
import FlexBox from "components/FlexBox";
import Category from "components/icons/Category";
import NavLink from "components/nav-link/NavLink";
import { Paragraph } from "components/Typography";
import navbarNavigations from "data/navbarNavigations";
// import ArrowRight from "@mui/icons-material/ArrowRight";
// import ChevronRight from "@mui/icons-material/ChevronRight";
import { Box, Container, MenuItem, styled } from "@mui/material";
import React from "react";
import {ArrowLeft, ChevronLeft} from "@mui/icons-material"; // component props interface

// const common css style
const navLinkStyle = {
  cursor: "pointer",
  marginRight: "2rem",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
  "&:last-child": {
    marginRight: "0",
  },
}; // style components

const StyledNavLink = styled(NavLink)(() => ({
  ...navLinkStyle,
}));
const ParentNav = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    "& > .parent-nav-item": {
      display: "block",
    },
  },
}));
const ParentNavItem = styled(Box)(() => ({
  display: "none",
  position: "absolute",
  top: 0,
  left: "100%",
  zIndex: 5,
}));
const NavBarWrapper = styled(BazarCard)(({ theme }) => ({
  display: "block",
  position: "relative",
  height: "60px",
  borderRadius: "0px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const InnerContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
}));
const CategoryMenuButton = styled(BazarButton)(({ theme }) => ({
  // width: "278px",
  height: "40px",
  px: "1rem",
  backgroundColor: theme.palette.grey[100],
}));

const Navbar = ({ navListOpen, hideCategories }) => {
  const renderNestedNav = (list, isRoot = false) => {
    return list?.map((nav) => {
      if (isRoot) {
        if (nav.url && nav.extLink)
          return (
            <StyledNavLink
              href={nav.url}
              key={nav.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nav.title}
            </StyledNavLink>
          );
        else if (nav.url)
          return (
            <StyledNavLink href={nav.url} key={nav.title}>
              {nav.title}
            </StyledNavLink>
          );
        if (nav.child)
          return (
            <FlexBox
              position="relative"
              flexDirection="column"
              alignItems="center"
              key={nav.title}
              sx={{
                "&:hover": {
                  "& > .child-nav-item": {
                    display: "block",
                  },
                },
              }}
            >
              <Box sx={navLinkStyle}>{nav.title}</Box>
              <Box
                className="child-nav-item"
                sx={{
                  display: "none",
                  position: "absolute",
                  left: 0,
                  top: "100%",
                  zIndex: 5,
                }}
              >
                <BazarCard
                  sx={{
                    mt: "1.25rem",
                    py: "0.5rem",
                    minWidth: "230px",
                  }}
                  elevation={3}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </Box>
            </FlexBox>
          );
      } else {
        if (nav.url)
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          );
        if (nav.child)
          return (
            <ParentNav position="relative" minWidth="230px" key={nav.title}>
              <MenuItem color="grey.700">

                <Box flex="1 1 0" component="span">
                  {nav.title}
                </Box>
              </MenuItem>
              <ParentNavItem className="parent-nav-item" pl={1}>
                <BazarCard
                  sx={{
                    py: "0.5rem",
                    minWidth: "230px",
                  }}
                  elevation={3}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </ParentNavItem>
            </ParentNav>
          );
      }
    });
  };

  return (
    <NavBarWrapper elevation={2} hoverEffect={false}>
      {!hideCategories ? (
        <InnerContainer>
          <FlexBox>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      ) : (
        <InnerContainer
          sx={{
            // justifyContent: "flex-end",
          }}
        >
          <FlexBox>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      )}
    </NavBarWrapper>
  );
};

export default Navbar;
