import { styled } from "@mui/material/styles";
import { slideDown } from "animations/keyframes";
import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
export const StyledBox = styled(({
  children,
  componentHeight,
  fixedOn,
  fixed,
  ...rest
}) => <div {...rest}>{children}</div>)(({
  theme,
  componentHeight,
  fixedOn,
  fixed
}) => ({
  "& .hold": {
    position: "relative",
    zIndex: 2,
    boxShadow: "none"
  },
  "& .fixed": {
    position: "fixed",
    right: 0,
    left: 0,
    zIndex: 1500,
    boxShadow: theme.shadows[2],
    top: `${fixedOn}px`,
    transition: "all 350ms ease-in-out",
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`
  },
  "& + .section-after-sticky": {
    paddingTop: fixed ? componentHeight : 0
  }
}));

const Sticky = ({
  fixedOn,
  containerRef,
  children,
  notifyPosition,
  notifyOnScroll,
  onSticky
}) => {
  const [fixed, setFixed] = useState(false);
  const [parentHeight, setParentHeight] = useState(0);
  const elementRef = useRef(null);
  const positionRef = useRef(0);
  const scrollListener = useCallback(() => {
    if (!window) return;
    let distance = window.pageYOffset - positionRef.current;

    if (containerRef?.current) {
      let containerDistance = containerRef.current.offsetTop + containerRef.current?.offsetHeight - window.pageYOffset;

      if (notifyPosition && notifyOnScroll) {
        notifyOnScroll(distance <= notifyPosition && containerDistance > notifyPosition);
      }

      return setFixed(distance <= fixedOn && containerDistance > fixedOn);
    }

    if (notifyPosition && notifyOnScroll) {
      notifyOnScroll(distance >= notifyPosition);
    }

    let isFixed = distance >= fixedOn;

    if (positionRef.current === 0) {
      isFixed = distance >= fixedOn + elementRef.current?.offsetHeight;
    }

    setFixed(isFixed);
  }, []);
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", scrollListener);
    };
  }, []);
  useEffect(() => {
    if (!positionRef.current) {
      positionRef.current = elementRef.current?.offsetTop;
    }

    setParentHeight(elementRef.current?.offsetHeight || 0);
  }, [elementRef.current, children]);
  useEffect(() => {
    if (onSticky) onSticky(fixed);
  }, [fixed]);
  return <StyledBox fixedOn={fixedOn} componentHeight={parentHeight} fixed={fixed}>
      <div className={clsx({
      hold: !fixed,
      fixed: fixed
    })} ref={elementRef}>
        {children}
      </div>
    </StyledBox>;
};

export default Sticky;