import FlexBox from 'components/FlexBox';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import React from 'react'; // Component Props interface

// styled components
const StyledFlexBox = styled(({
  children,
  open,
  ...rest
}) => <FlexBox {...rest}>{children}</FlexBox>)(({
  open
}) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  '.caretIcon': {
    transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
    transition: 'transform 250ms ease-in-out'
  }
}));

const AccordionHeader = ({
  sx,
  open,
  children,
  showIcon,
  ...props
}) => {
  return <StyledFlexBox open={open} sx={sx} {...props}>
      {children}
      {showIcon && <ChevronRight className="caretIcon" fontSize="small" />}
    </StyledFlexBox>;
};

AccordionHeader.defaultProps = {
  px: '1rem',
  py: '0.5rem',
  showIcon: true
};
export default AccordionHeader;