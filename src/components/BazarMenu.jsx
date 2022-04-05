import Menu from '@mui/material/Menu';
import React, { Children, cloneElement, Fragment } from 'react';

const BazarMenu = ({
  open,
  handler,
  direction,
  shouldCloseOnItemClick,
  children,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = customOnClick => () => {
    if (customOnClick) customOnClick();
    if (shouldCloseOnItemClick) handleClose();
  };

  return <Fragment>
      {handler && cloneElement(handler, {
      onClick: handler.props.onClick || handleClick
    })}
      <Menu anchorEl={anchorEl} open={open !== undefined ? open : !!anchorEl} onClose={handleClose} anchorOrigin={{
      vertical: 'bottom',
      horizontal: direction || 'left'
    }} transformOrigin={{
      vertical: 'top',
      horizontal: direction || 'left'
    }} {...props}>
        {Children.map(children, child => cloneElement(child, {
        onClick: handleMenuItemClick(child.props.onClick)
      }))}
      </Menu>
    </Fragment>;
};

BazarMenu.defaultProps = {
  direction: 'left',
  shouldCloseOnItemClick: true
};
export default BazarMenu;