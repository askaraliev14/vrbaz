import { Box } from "@mui/material";
import appIcons from "components/icons";
import FlexBox from "components/FlexBox";
import SimpleBar from "simplebar-react";
import React, { Fragment } from "react";
import BazarCard from "components/BazarCard";
import { useTheme, styled } from "@mui/system";
import { H5, Span } from "components/Typography";
import NavLink from "components/nav-link/NavLink";
import Accordion from "components/accordion/Accordion";
import AccordionHeader from "components/accordion/AccordionHeader";
const NavbarRoot = styled(BazarCard)(({
  isfixed,
  bgcolor,
  colors
}) => ({
  position: "relative",
  height: "auto",
  borderRadius: "8px",
  zIndex: 10,
  paddingBottom: 10,
  overflow: isfixed ? "auto" : "unset",
  background: bgcolor,
  "& .linkList": {
    transition: "all 0.2s",
    padding: "8px 20px",
    "&:hover": {
      color: colors.main
    }
  }
}));
const StyledList = styled(FlexBox)(({
  theme,
  colors
}) => ({
  transition: "all 0.2s",
  padding: "4px 20px",
  alignItems: "center",
  "& .listCircle": {
    background: theme.palette.grey[600]
  },
  "&:hover": {
    color: colors.main,
    "& .listCircle": {
      background: colors.main
    }
  }
}));
const BorderBox = styled(Box)(({
  colors
}) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginTop: 5,
  marginBottom: 15,
  borderBottom: "2px",
  borderColor: colors.main,
  borderStyle: "none none dashed none",
  "& span": {
    width: "100%"
  }
}));
const Circle = styled("span")(() => ({
  width: "4px",
  height: "4px",
  borderRadius: "3px",
  marginLeft: "2rem",
  marginRight: "8px"
})); // component props interface

const GiftFurnitureSideNav = props => {
  const {
    isFixed,
    navList,
    bgColor,
    contentColor,
    sidebarHeight
  } = props;
  const {
    palette,
    shadows
  } = useTheme();

  const renderChild = childList => {
    return childList.map(item => <Fragment key={item.title}>
        <NavLink href={item.href} color="grey.700">
          <StyledList colors={contentColor}>
            <Circle className="listCircle" />
            <Span py={0.75} flex="1 1 0">
              {item.title}
            </Span>
          </StyledList>
        </NavLink>
      </Fragment>);
  };

  return <SimpleBar style={{
    maxHeight: sidebarHeight,
    boxShadow: shadows[1]
  }}>
      <NavbarRoot isfixed={isFixed} bgcolor={bgColor} colors={contentColor}>
        {navList.map((item, ind) => {
        return <Box key={ind}>
              <Box padding="20px 20px 5px 20px">
                <H5>{item.category}</H5>
                <BorderBox colors={contentColor}></BorderBox>
              </Box>
              {item.categoryItem.map((item, ind) => {
            const Icon = appIcons[item.icon];
            return <Box mb="2px" color="grey.700" key={ind}>
                    {item.child ? <Accordion>
                        <AccordionHeader py={0.75} className="linkList" justifyContent="flex-start" sx={{
                  transition: "all 0.2s",
                  "&:hover": {
                    color: palette.primary.main
                  }
                }}>
                          <Box flex="1 1 0">
                            <FlexBox alignItems="center" flex="1 1 0">
                              <Icon fontSize="small" />
                              <Span color="inherit" fontWeight="600" mr={1.125} ml={1.5} flex="1 1 0">
                                {item.title}
                              </Span>
                            </FlexBox>
                          </Box>
                        </AccordionHeader>
                        {item.child ? renderChild(item.child) : null}
                      </Accordion> : <NavLink href={item.href} color="grey.700">
                        <FlexBox className="linkList" py={0.75} color="inherit" key={item.title}>
                          <Box mr={1.5}>
                            <Icon fontSize="small" />
                          </Box>
                          <Span color="inherit" fontWeight="600" mr={1.125} flex="1 1 0">
                            {item.title}
                          </Span>
                        </FlexBox>
                      </NavLink>}
                  </Box>;
          })}
            </Box>;
      })}
      </NavbarRoot>
    </SimpleBar>;
};

export default GiftFurnitureSideNav;