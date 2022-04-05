import { Box } from "@mui/material";
import appIcons from "components/icons";
import SimpleBar from "simplebar-react";
import FlexBox from "components/FlexBox";
import React, { Fragment } from "react";
import BazarCard from "components/BazarCard";
import { styled, useTheme } from "@mui/system";
import NavLink from "components/nav-link/NavLink";
import { H4, Span } from "components/Typography";
import Accordion from "components/accordion/Accordion";
import AccordionHeader from "components/accordion/AccordionHeader";
const NavbarRoot = styled(BazarCard)(({
  isfixed,
  theme
}) => ({
  position: "relative",
  height: "100%",
  borderRadius: "8px",
  overflow: isfixed ? "auto" : "unset",
  "& .linkList": {
    transition: "all 0.2s",
    background: theme.palette.primary[50],
    padding: "8px 11px",
    "&:hover": {
      color: theme.palette.primary.main,
      background: theme.palette.primary[100]
    }
  }
}));
const StyledList = styled(FlexBox)(({
  theme
}) => ({
  transition: "all 0.2s",
  padding: "4px 11px",
  alignItems: "center",
  "& .listCircle": {
    background: theme.palette.grey[600]
  },
  "&:hover": {
    color: theme.palette.primary.main,
    background: theme.palette.primary[100],
    "& .listCircle": {
      background: theme.palette.primary.main
    }
  }
}));
const Circle = styled("span")(() => ({
  width: "4px",
  height: "4px",
  borderRadius: "3px",
  marginLeft: "2rem",
  marginRight: "8px"
})); // component props interface

const HealthBeautySidenav = props => {
  const {
    isFixed,
    navList
  } = props;
  const {
    palette,
    shadows
  } = useTheme();

  const renderChild = childList => {
    return childList.map(item => <Fragment key={item.title}>
        <NavLink href={item.href} color="grey.700">
          <StyledList>
            <Circle className="listCircle" />
            <Span py={0.75} flex="1 1 0">
              {item.title}
            </Span>
          </StyledList>
        </NavLink>
      </Fragment>);
  };

  return <SimpleBar style={{
    maxHeight: "100%",
    boxShadow: shadows[1]
  }}>
      <NavbarRoot isfixed={isFixed}>
        <FlexBox sx={{
        background: palette.primary[200],
        borderRadius: "5px 5px 0px 0px"
      }} padding="10px 18px">
          <H4>Categories</H4>
        </FlexBox>
        {navList.map((item, ind) => {
        const Icon = appIcons[item.icon];
        return <Box mb="2px" color="grey.700" key={ind}>
              {item.child ? <Accordion>
                  <AccordionHeader px={0} py={0.75} className="linkList" justifyContent="flex-start">
                    <FlexBox sx={{
                transition: "all 0.2s",
                "&:hover": {
                  color: palette.primary.main
                }
              }} py={0.3} alignItems="center" flex="1 1 0">
                      <Icon fontSize="small" />
                      <Span color="inherit" fontWeight="600" mr={1.125} ml={1.5} flex="1 1 0">
                        {item.title}
                      </Span>
                    </FlexBox>
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
      </NavbarRoot>
    </SimpleBar>;
};

export default HealthBeautySidenav;