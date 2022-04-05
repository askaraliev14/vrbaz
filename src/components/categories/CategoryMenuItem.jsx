import ChevronRight from "@mui/icons-material/ChevronRight";
import { Box, MenuItem, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import {ChevronLeft} from "@mui/icons-material"; // component props interface

//styled component
const Wrapper = styled(Box)(({
  theme
}) => ({
  "& .category-dropdown-link": {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",

    padding: "0px 1rem",
    height: 40,
    // minWidth: "278px",
    whiteSpace: "pre",
    transition: "all 250ms ease-in-out",
    "& .title": {
      paddingLeft: "0.75rem",
      flexGrow: 1
    }
  },
  "&:hover": {
    "& > .category-dropdown-link": {
      color: theme.palette.primary.main,
      background: theme.palette.primary.light
    },
    "& > .mega-menu": {
      display: "block"
    }
  }
}));

const CategoryMenuItem = ({
  href,
  title,
  caret,
  children,
  ...rest
}) => {
  return <Wrapper>
      <Link href={href}>
        <MenuItem className="category-dropdown-link">
          {caret && <ChevronLeft fontSize="small" />}
          <span className="title">{title}</span>
          {rest.icon && <rest.icon fontSize="small" color="inherit" />}
        </MenuItem>
      </Link>
      {children}
    </Wrapper>;
};

CategoryMenuItem.defaultProps = {
  caret: true
};
export default CategoryMenuItem;