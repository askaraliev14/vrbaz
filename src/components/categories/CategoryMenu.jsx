import { Box, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CategoryMenuCard from "./CategoryMenuCard"; // component props interface

// styled component
const Wrapper = styled(Box)(({
  open
}) => ({
  position: "relative",
  cursor: "pointer",
  "& .dropdown-icon": {
    marginLeft: "0.25rem",
    transition: "all 250ms ease-in-out",
    transform: `rotate(${open ? "90deg" : "0deg"})`
  }
}));

const CategoryMenu = ({
  open: isOpen = false,
  children
}) => {
  const [open, setOpen] = useState(isOpen);
  const popoverRef = useRef(open);
  popoverRef.current = open;

  const toggleMenu = e => {
    e.stopPropagation();
    if (!isOpen) setOpen(open => !open);
  };

  const handleDocumentClick = () => {
    if (popoverRef.current && !isOpen) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return <Wrapper open={open}>
      {React.cloneElement(children, {
      open,
      className: `${children.props.className}`,
      onClick: toggleMenu
    })}
      <CategoryMenuCard open={open} />
    </Wrapper>;
};

export default CategoryMenu;