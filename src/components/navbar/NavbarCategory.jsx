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
import { ArrowLeft, ChevronLeft, ChevronRight } from "@mui/icons-material"; // component props interface

// const common css style
const navLinkStyle = {
  cursor: "pointer",
  // marginRight: "2rem",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
  // "&:last-child": {
  //   marginRight: "0",
  // },
}; // style components

const CategoryMenuButton = styled(BazarButton)(({ theme }) => ({
  // width: "278px",
  height: "40px",
  px: "1rem",
  // backgroundColor: "#FFF",
}));
const NavBarWrapper = styled(BazarCard)(({ theme }) => ({
    display: "block",
    position: "relative",
    // height: "60px",
    borderRadius: "0px",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));
const NavbarCategory = ({ navListOpen, hideCategories }) => {
  return (
    <NavBarWrapper elevation={2} hoverEffect={false}>
      <CategoryMenu
        open={navListOpen}
        ml={0.5}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <CategoryMenuButton variant="text">
          <ChevronRight className="dropdown-icon" fontSize="small" />
          <Paragraph
            fontWeight="600"
            textAlign="right"
            flex="1 1 0"
            mr={1.25}
            // color="grey.600"
          >
            Категории
          </Paragraph>
          {/*<Category fontSize="small" />*/}
        </CategoryMenuButton>
      </CategoryMenu>
    </NavBarWrapper>
  );
};

export default NavbarCategory;
