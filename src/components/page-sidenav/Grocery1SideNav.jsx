import { Box } from "@mui/material";
import SimpleBar from "simplebar-react";
import appIcons from "components/icons";
import FlexBox from "components/FlexBox";
import React from "react";
import BazarCard from "components/BazarCard";
import { useTheme, styled } from "@mui/system";
import NavLink from "components/nav-link/NavLink";
import { H5, Span } from "components/Typography";
import Accordion from "components/accordion/Accordion";
import AccordionHeader from "components/accordion/AccordionHeader";
const NavbarRoot = styled(BazarCard)(({
  theme,
  isfixed
}) => ({
  position: "relative",
  height: "100%",
  borderRadius: "8px",
  boxShadow: theme.shadows[2],
  overflow: isfixed ? "auto" : "unset",
  "& .linkList": {
    transition: "all 0.2s",
    padding: "8px 20px"
  }
}));
const StyledList = styled(FlexBox)(({
  theme
}) => ({
  transition: "all 0.2s",
  padding: "4px 20px",
  alignItems: "center",
  "& .listCircle": {
    background: theme.palette.grey[600]
  },
  "&:hover": {
    "& .listCircle": {
      background: theme.palette.primary[300]
    }
  }
}));
const BorderBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginTop: 5,
  marginBottom: 15,
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

const Grocery1SideNav = props => {
  const {
    isFixed,
    navList
  } = props;
  const {
    palette,
    shadows
  } = useTheme();

  const renderChild = childList => {
    return childList.map((item, ind) => <NavLink key={ind} href={item.href} color="grey.700">
        <StyledList>
          <Circle className="listCircle" />
          <Span py={0.75} flex="1 1 0">
            {item.title}
          </Span>
        </StyledList>
      </NavLink>);
  };

  return <SimpleBar style={{
    maxHeight: "100%",
    boxShadow: shadows[1]
  }}>
      <NavbarRoot isfixed={isFixed}>
        {navList.map((item, ind) => {
        return <Box key={ind}>
              <Box padding="20px 20px 5px 20px">
                <H5>{item.category}</H5>
                <BorderBox>
                  <Span sx={{
                height: "3px",
                borderRadius: "2px 0 0 2px",
                background: palette.primary[200]
              }} />
                  <Span sx={{
                height: "2px",
                borderRadius: "0 2px 2px 0",
                background: palette.grey[300]
              }} />
                </BorderBox>
              </Box>
              {item.categoryItem.map((item, ind) => {
            const Icon = appIcons[item.icon];
            return <Box mb="2px" color="grey.700" key={ind}>
                    {item.child ? <Accordion>
                        <AccordionHeader px={0} py={0.75} className="linkList" justifyContent="flex-start" sx={{
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

export default Grocery1SideNav;