import { styled } from "@mui/system";
import { layoutConstant } from "utils/constants";
const TopbarStyle = styled("div")(({
  palette
}) => ({
  root: {
    // background: palette.secondary.main,
    color: palette.secondary.contrastText,
    height: layoutConstant.topbarHeight,
    fontSize: 12
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  },
  topbarLeft: {
    "& .logo": {
      display: "none"
    },
    "& .title": {
      marginLeft: "10px"
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block"
      },
      "& > *:not(.logo)": {
        display: "none"
      }
    }
  },
  topbarRight: {
    "& .link": {
      paddingRight: 30,
      color: palette.secondary.contrastText
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        display: "none"
      }
    }
  },
  smallRoundedImage: {
    height: 15,
    width: 25,
    borderRadius: 2
  },
  handler: {
    height: layoutConstant.topbarHeight
  },
  menuTitle: {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600
  },
  menuItem: {
    minWidth: 100
  }
}));
export default TopbarStyle;