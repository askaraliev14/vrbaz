import { Drawer, styled } from '@mui/material';
import clsx from 'clsx';
import React, { cloneElement, useEffect, useState } from 'react';
const Wrapper = styled('div')(() => ({
  '& .handle': {
    cursor: 'pointer'
  }
}));

const Sidenav = ({
  position,
  open,
  width,
  handle,
  children,
  toggleSidenav
}) => {
  const [sidenavOpen, setSidenavOpen] = useState(open);

  const handleToggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  };

  useEffect(() => {
    setSidenavOpen(open);
  }, [open]);
  return <Wrapper>
      <Drawer open={sidenavOpen} anchor={position} onClose={toggleSidenav || handleToggleSidenav} SlideProps={{
      style: {
        width: width || 280
      }
    }}>
        {children}
      </Drawer>

      {handle && cloneElement(handle, {
      className: clsx(handle.props?.className, 'handle'),
      onClick: toggleSidenav || handleToggleSidenav
    })}
    </Wrapper>;
};

Sidenav.defaultProps = {
  width: 280,
  position: 'left',
  open: false
};
export default Sidenav;