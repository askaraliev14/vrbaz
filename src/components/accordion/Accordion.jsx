import { styled } from '@mui/material';
import React, { Children, cloneElement, useEffect, useRef, useState } from 'react'; // component props interface

// styled component
const Wrapper = styled('div')(({
  open,
  parent_height,
  header_height
}) => ({
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'height 250ms ease-in-out',
  height: open ? parent_height : header_height
}));

const Accordion = ({
  expanded = false,
  children
}) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(expanded);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  const toggle = () => setOpen(!open);

  useEffect(() => {
    let parent = ref.current;

    if (parent) {
      setHeaderHeight(parent.children[0].scrollHeight);
      setParentHeight(parent.scrollHeight);
    }
  }, [ref.current]);
  const modifiedChildren = Children.map(children, (child, ind) => {
    if (ind === 0) return cloneElement(child, {
      open,
      onClick: toggle
    });else return child;
  });
  return <Wrapper ref={ref} open={open} header_height={headerHeight} parent_height={parentHeight}>
      {modifiedChildren}
    </Wrapper>;
};

Accordion.defaultProps = {
  expanded: false
};
export default Accordion;