import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import clsx from "clsx";
import { Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { Fragment } from "react";
import { StyledArrowBackButton, StyledArrowNextButton, StyledCarouselProvider, StyledDot, StyledDotGroup, StyledSlider } from "./CarouselStyled"; // component props interface

const Carousel = ({
  sx,
  step,
  spacing,
  infinite,
  children,
  autoPlay,
  interval,
  showDots,
  dotClass,
  dotColor,
  showArrow,
  totalSlides,
  currentSlide,
  visibleSlides,
  leftButtonClass,
  leftButtonStyle,
  arrowButtonClass,
  rightButtonClass,
  rightButtonStyle,
  hasMasterSpinner,
  isIntrinsicHeight,
  naturalSlideWidth,
  dotGroupMarginTop,
  naturalSlideHeight
}) => {
  return <StyledCarouselProvider sx={sx} step={step} spacing={spacing} interval={interval} infinite={infinite} isPlaying={autoPlay} totalSlides={totalSlides} currentSlide={currentSlide} visibleSlides={visibleSlides} hasMasterSpinner={hasMasterSpinner} isIntrinsicHeight={isIntrinsicHeight} naturalSlideWidth={naturalSlideWidth || 100} naturalSlideHeight={naturalSlideHeight || 125}>
      <StyledSlider spacing={spacing}>
        {React.Children.map(children, (child, ind) => <Slide index={ind}>{child}</Slide>)}
      </StyledSlider>

      {showDots && <StyledDotGroup className={clsx(dotClass)} dot_margin_top={dotGroupMarginTop} renderDots={props => renderDots({ ...props,
      step,
      dotColor
    })} />}

      {showArrow && <Fragment>
          <StyledArrowBackButton id="backArrowButton" sx={{
        left: "-20px"
      }} style={leftButtonStyle || {}} className={clsx(leftButtonClass, arrowButtonClass)}>
            <ArrowBack fontSize="small" color="inherit" />
          </StyledArrowBackButton>

          <StyledArrowNextButton id="backForwardButton" sx={{
        right: "-20px"
      }} style={rightButtonStyle || {}} className={clsx(arrowButtonClass, rightButtonClass)}>
            <ArrowForward fontSize="small" color="inherit" />
          </StyledArrowNextButton>
        </Fragment>}
    </StyledCarouselProvider>;
};

const renderDots = ({
  step,
  dotColor,
  totalSlides,
  currentSlide,
  visibleSlides,
  carouselStore
}) => {
  const dots = [];
  const total = totalSlides - visibleSlides + 1; // handle dot button

  const handleClick = (currentSlide, autoplay) => {
    carouselStore.setStoreState({
      autoPlay: autoplay,
      currentSlide: currentSlide
    });
  };

  for (let i = 0; i < total; i += step) {
    dots.push(<StyledDot dot_color={dotColor} dot_active={currentSlide === i ? i + 1 : 0} onClick={() => handleClick(i, false)} key={(Math.random() * i + Date.now()).toString()} />);

    if (total - (i + 1) < step && total - (i + 1) !== 0) {
      dots.push(<StyledDot dot_color={dotColor} dot_active={totalSlides - visibleSlides} key={(Math.random() * i + Date.now()).toString()} onClick={() => handleClick(totalSlides - visibleSlides, false)} />);
    }
  }

  return dots;
};

Carousel.defaultProps = {
  sx: {},
  step: 1,
  interval: 2000,
  showDots: false,
  showArrow: true,
  autoPlay: false,
  infinite: false,
  totalSlides: 10,
  visibleSlides: 5,
  spacing: "1.5rem",
  naturalSlideWidth: 100,
  naturalSlideHeight: 125,
  hasMasterSpinner: false,
  isIntrinsicHeight: true,
  dotGroupMarginTop: "2rem",
  arrowButtonColor: "secondary"
};
export default Carousel;