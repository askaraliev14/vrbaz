import merge from "merge";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { components } from "./components";
import { typography } from "./typography";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { themeColors, primary, blue, marron, paste } from "./themeColors";
const THEMES = {
  DEFAULT: "DEFAULT",
};
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};
const themesOptions = {
  [THEMES.DEFAULT]: {
    breakpoints,
    components: { ...components
    },
    palette: {
      primary: { ...primary,
        light: primary[100]
      },
      ...themeColors
    },
    typography
  }
};
export const bazarTheme = () => {
  const {
    pathname
  } = useRouter();
  const {
    publicRuntimeConfig
  } = getConfig();
  /*============ Remove following code ==============*/

  const updateTheme = themeName => {
    publicRuntimeConfig.theme = themeName;
    themeOptions = themesOptions[publicRuntimeConfig.theme];
  };

  var themeOptions;
  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/vrbaz-shop":
      updateTheme(THEMES.DEFAULT);
      break;

    default:
      themeOptions = themesOptions[publicRuntimeConfig.theme];
      break;
  }


  /*============ Remove above code ==============*/

  /* Uncomment below line and set your theme, theme name reference: THEMES  */
  // var themeOptions = themeOptions[THEMES.DEFAULT]
  // // OR
  // var themeOptions = themeOptions[THEMES.FURNITURE]
  // // OR
  // // Choose a different theme from THEMES object, also you can create your own theme

  let theme = createTheme(merge({}, themeOptions));
  theme = responsiveFontSizes(theme);
  theme.shadows[1] = "0px 1px 3px rgba(3, 0, 71, 0.09)";
  theme.shadows[2] = "0px 4px 16px rgba(43, 52, 69, 0.1)";
  theme.shadows[3] = "0px 8px 45px rgba(3, 0, 71, 0.09)";
  theme.shadows[4] = "0px 0px 28px rgba(3, 0, 71, 0.01)";
  return theme;
};