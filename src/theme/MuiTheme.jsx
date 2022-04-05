import React from "react";
import { bazarTheme } from "./theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const MuiTheme = ({
  children
}) => {
  return <ThemeProvider theme={bazarTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>;
};

export default MuiTheme;