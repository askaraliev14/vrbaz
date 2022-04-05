import clsx from "clsx";
import { Container } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { layoutConstant } from "utils/constants";
const StyledContainer = styled(Container)(({
  theme
}) => ({
  display: "flex",
  position: "relative",
  ".sidenav": {
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    position: "relative",
    top: 0,
    bottom: 0,
    height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    "& .MuiPaper-root": {
      borderRadius: 5
    }
  },
  ".fixed": {
    position: "fixed",
    scrollBehavior: "unset",
    top: layoutConstant.headerHeight
  },
  ".pageContent": {
    position: "relative",
    left: "unset",
    width: `calc(100% - 2.5rem - ${layoutConstant.grocerySidenavWidth}px)`,
    marginLeft: "1.75rem"
  },
  ".pageContentShifted": {
    left: layoutConstant.grocerySidenavWidth
  },
  ".section1": {
    marginBottom: "3rem",
    marginTop: "1.75rem"
  },
  "@keyframes slideDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(0)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  [theme.breakpoints.down("md")]: {
    ".sidenav": {
      display: "none"
    },
    ".pageContent": {
      width: "100% !important",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      left: "0px !important"
    }
  }
}));

const SidenavContainer = props => {
  const {
    SideNav,
    children,
    navFixedComponentID
  } = props;
  const [isSidenavFixed, setSidenavFixed] = useState(false);
  const scrollListener = useCallback(() => {
    const element = document.getElementById(navFixedComponentID);
    const bottom = element.getBoundingClientRect().bottom + window.scrollY - layoutConstant.headerHeight;
    setSidenavFixed(window.pageYOffset > bottom);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);
  return <StyledContainer>
      <Box className={clsx({
      sidenav: true,
      fixed: isSidenavFixed
    })}>
        <SideNav />
      </Box>
      <Box className={clsx({
      pageContent: true,
      pageContentShifted: isSidenavFixed
    })}>
        {children}
      </Box>
    </StyledContainer>;
};

export default SidenavContainer;