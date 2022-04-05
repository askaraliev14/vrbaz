import navigations from "data/navigations";
import { Box, styled } from "@mui/material";
import React from "react";
import CategoryMenuItem from "./CategoryMenuItem";
import MegaMenu1 from "./mega-menu/MegaMenu1";
import MegaMenu2 from "./mega-menu/MegaMenu2"; // component props interface

// styled component
const Wrapper = styled(Box)(({
  theme,
  position,
  open
}) => ({
  position: position || "unset",
  padding: "0.5rem 0px",
  right: 0,
  left: "auto",
  top: position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem",
  borderRadius: 4,
  transform: open ? "scaleY(1)" : "scaleY(0)",
  transformOrigin: "top",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  transition: "all 250ms ease-in-out",
  zIndex: 98
}));

const CategoryMenuCard = ({
  open,
  position
}) => {
  const megaMenu = {
    MegaMenu1,
    MegaMenu2
  };
  return <Wrapper open={open} position={position}>
      {navigations.map(item => {
      let MegaMenu = megaMenu[item.menuComponent];
      return <CategoryMenuItem title={item.title} href={item.href} icon={item.icon} caret={!!item.menuData} key={item.title}>
            <MegaMenu data={item.menuData || {}} />
          </CategoryMenuItem>;
    })}
    </Wrapper>;
};

CategoryMenuCard.defaultProps = {
  position: "absolute"
};
export default CategoryMenuCard;