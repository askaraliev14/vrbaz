// import React, { useEffect, useState } from "react";
// import Home from "components/icons/Home";
// import User2 from "components/icons/User2";
// import useWindowSize from "hooks/useWindowSize";
// import { layoutConstant } from "utils/constants";
// import NavLink from "components/nav-link/NavLink";
// import { Badge, Box, Drawer, styled } from "@mui/material";
// import { useAppContext } from "contexts/app/AppContext";
// import CategoryOutlined from "components/icons/CategoryOutline";
// import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined"; // styled components
//
// const Wrapper = styled(Box)(({
//   theme
// }) => ({
//   display: "none",
//   position: "fixed",
//   bottom: 0,
//   left: 0,
//   right: 0,
//   height: layoutConstant.mobileNavHeight,
//   justifyContent: "space-around",
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: "0px 1px 4px 3px rgba(0, 0, 0, 0.1)",
//   zIndex: theme.zIndex.drawer + 1,
//   "@media only screen and (max-width: 900px)": {
//     display: "flex",
//     width: "100vw"
//   }
// }));
// const StyledNavLink = styled(NavLink)(() => ({
//   flex: "1 1 0",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "13px"
// }));
// const StyledBox = styled(Box)(({
//   theme
// }) => ({
//   flex: "1 1 0",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "13px",
//   cursor: "pointer",
//   transition: "color 150ms ease-in-out",
//   "&:hover": {
//     color: `${theme.palette.primary.main} !important`
//   }
// }));
// const {
//   mobileHeaderHeight
// } = layoutConstant;
// const StyledDrawer = styled(Drawer)(({
//   theme,
//   totalheight
// }) => ({
//   width: 250,
//   flexShrink: 0,
//   "& .MuiDrawer-paper": {
//     width: 250,
//     top: totalheight,
//     height: `calc(100% - ${totalheight + mobileHeaderHeight}px)`,
//     boxShadow: theme.shadows[2],
//     boxSizing: "border-box"
//   },
//   "& .MuiBackdrop-root.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
//     top: totalheight
//   }
// }));
//
// const MobileNavigationBar2 = ({
//   children
// }) => {
//   const width = useWindowSize();
//   const {
//     state
//   } = useAppContext();
//   const {
//     cartList
//   } = state.cart;
//   const iconStyle = {
//     marginBottom: "4px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   };
//   const [open, setOpen] = React.useState(false);
//
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//
//   const {
//     mobileNavHeight,
//     topbarHeight
//   } = layoutConstant;
//   const total = mobileNavHeight + topbarHeight;
//   const [totalHeight, setTotalHeight] = useState(total);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 30) {
//         setTotalHeight(mobileNavHeight);
//       } else {
//         setTotalHeight(total);
//       }
//     });
//     return () => window.removeEventListener("scroll", null);
//   }, []);
//   return width <= 900 ? <Box position="relative" display="flex" flexDirection="column">
//       <StyledDrawer open={open} anchor="left" // variant="persistent"
//     totalheight={totalHeight} onClose={handleDrawerClose}>
//         {children}
//       </StyledDrawer>
//
//       <Wrapper>
//         {list.map(item => {
//         if (item.href) {
//           return <StyledNavLink href={item.href} key={item.title}>
//                 {item.title === "Cart" ? <Badge badgeContent={cartList.length} color="primary">
//                     <item.icon fontSize="small" sx={iconStyle} />
//                   </Badge> : <item.icon sx={iconStyle} fontSize="small" />}
//
//                 {item.title}
//               </StyledNavLink>;
//         } else {
//           return <StyledBox onClick={open ? handleDrawerClose : handleDrawerOpen} key={item.title}>
//                 {item.title === "Cart" ? <Badge badgeContent={cartList.length} color="primary">
//                     <item.icon fontSize="small" sx={iconStyle} />
//                   </Badge> : <item.icon sx={iconStyle} fontSize="small" />}
//
//                 {item.title}
//               </StyledBox>;
//         }
//       })}
//       </Wrapper>
//     </Box> : null;
// };
//
// const list = [{
//   title: "Home",
//   icon: Home,
//   href: "/"
// }, {
//   title: "Category",
//   icon: CategoryOutlined
// }, {
//   title: "Cart",
//   icon: ShoppingBagOutlined,
//   href: "/cart"
// }, {
//   title: "Account",
//   icon: User2,
//   href: "/profile"
// }];
// export default MobileNavigationBar2;