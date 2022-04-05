import BazarImage from "components/BazarImage";
import { Paragraph } from "components/Typography";
import { Box, Button, Grid, styled } from "@mui/material";
import React from "react"; // component props interface

// styled component
const StyledBox = styled(Box)(({
  theme
}) => ({
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".title": {
    fontSize: 50,
    marginTop: 0,
    marginBottom: "1.35rem",
    lineHeight: 1.2
  },
  [theme.breakpoints.up("sm")]: {
    ".grid-item": {
      minHeight: 424,
      display: "flex",
      alignItems: "baseline",
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": {
      fontSize: 32
    }
  },
  [theme.breakpoints.down("xs")]: {
    ".title": {
      fontSize: 16
    },
    ".title + *": {
      fontSize: 13
    },
    ".button-link": {
      height: 36,
      padding: "0 1.5rem",
      fontSize: 13
    }
  }
}));

const CarouselCard1 = ({
  carousel
}) => {
  return <StyledBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item className="grid-item" sm={5} xs={12}>
          <h1 className="title">{carousel.title}</h1>
          <Paragraph color="secondary.main" mb={2.7}>
            {carousel.description}
          </Paragraph>
          <a href={carousel.buttonLik}>
          <Button className="button-link" variant="contained" color="primary" disableElevation sx={{
            px: "1.75rem",
            height: "44px",
            borderRadius: "8px"
          }}>
            {carousel.buttonText}
          </Button>
          </a>
        </Grid>
        <Grid item sm={5} xs={12}>
          <BazarImage src={carousel.photoUrl} alt="apple-watch-1" sx={{
          display: "block",
          mx: "auto",
          maxHeight: 400,
          maxWidth: "100%"
        }} />
        </Grid>
      </Grid>
    </StyledBox>;
};

export default CarouselCard1;