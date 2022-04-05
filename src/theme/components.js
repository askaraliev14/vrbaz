export const fontSize = 14;
export const fontFamily = ["Open Sans", "Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"].join(",");
export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      p: {
        lineHeight: 1.75
      },
      a: {
        textDecoration: "none",
        color: "inherit"
      },
      button: {
        fontFamily,
        fontSize
      },
      ".MuiRating-sizeSmall": {
        fontSize: "20px"
      },
      "#nprogress .bar": {
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px !important",
        borderRadius: "0px 300px 300px 0px !important",
        zIndex: 1031,
        overflow: "hidden"
      }
    }
  },
  MuiPagination: {
    defaultProps: {
      variant: "outlined",
      color: "primary"
    }
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
      variant: "outlined"
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 8,
        paddingBottom: 8
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        zIndex: 0
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        textTransform: "capitalize",
        minWidth: 0,
        minHeight: 0
      }
    },
    defaultProps: {
      color: "inherit"
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "8px"
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 8
      }
    }
  }
};