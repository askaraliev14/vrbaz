import { styled } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react"; // component props interface

// styled component
const StyledLink = styled("a")(({
  theme,
  active_route
}) => ({
  position: "relative",
  color: active_route === "active" ? theme.palette.primary.main : "inherit",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: `${theme.palette.primary.main} !important`
  }
}));

const NavLink = ({
  href,
  children,
  style,
  className,
  ...props
}) => {
  const {
    pathname
  } = useRouter();

  const checkRouteMatch = () => {
    if (href === "/") return pathname === href;
    return pathname.includes(href);
  }; // active route


  const currentRoute = checkRouteMatch();
  return <Link href={href}>
      <StyledLink active_route={currentRoute ? "active" : ""} className={clsx(className)} href={href} style={style} {...props}>
        {children}
      </StyledLink>
    </Link>;
};

export default NavLink;