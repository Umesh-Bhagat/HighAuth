import { 
 drawerWidth,
 boxShadow,
 transition,
 defaultFont
} 
from "../materials-dashboard-react.jsx";

const DawerStyle = theme => ({
  drawerPaper:{
      width:drawerWidth,
      top:"0",
      left:"0",
      bottom:"0",
      border:"none",
      ...boxShadow,
      zIndex:"1",
      position:"fixed",
      [theme.breakpoints.up("md")]:{
          height:"100%",
          width:drawerWidth,
          position:"fixed"
      },
      [theme.breakpoints.down("sm")]:{
          width:drawerWidth,
          position:"fixed",
          ...boxShadow,
          display: "block",
          top: "0",
          height: "100vh",
          right: "0",
          left: "auto",
          zIndex: "1032",
          visibility: "visible",
          overflowY: "visible",
          borderTop: "none",
          textAlign: "left",
          paddingRight: "0px",
          paddingLeft: "0",
          transform: `translate3d(${drawerWidth}px, 0, 0)`,
          ...transition
      }
  },
   logo:{
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(180, 180, 180, 0.3)"
    }
   },
  logoLink:{
    textTransform: "uppercase",
    padding: "8px 0 5px 0",
    display: "block",
    fontSize: "22px",
    textAlign: "left",
    fontWeight: "600",
    lineHeight: "30px",
    textDecoration: "none",
    color:"#bfbfbf",
    backgroundColor: "transparent",
    "&:hover": {
      color: "#999999"
    }
  },
  logoImage:{
    width: "50px",
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "10px",
    marginRight: "15px"
  },
  Image:{
    width: "50px",
    top: "13px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0"
  },
 
  gray:{
      backgroundColor: "#a6a6a6",
      boxShadow:
        "0 12px 12px -4px rgba(255, 255, 255,.2), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255, 255, 255,.2)",
      "&:hover": {
        backgroundColor: "#a6a6a6",
        boxShadow:
          "0 12px 20px -4px rgba(255, 255, 255,.2), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255, 255, 255,.2)"
      }
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    margin: "5px 7px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    ...defaultFont
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "30px",
    lineHeight: "30px",
    float: "left",
   // marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(255, 255, 255, 0.8)"
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    background:"red",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:before": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: "#4d4d4d",
      opacity: ""
    }
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset"
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
    color:"white",
    font:"28px",
    "&:hover,&:focus,&:visited": {
      color: "#FFFFFF"
    }
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "310px",
    zIndex: "4",
    overflowScrolling: "touch"
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    lineHeight: "30px",
    fontSize: "18px",
    fontWeight:"400",
    color: "rgb(255, 255, 255, .8)"
  },
  whiteFont: {
    fontWeight:"650",
    color:"black"
  },
});

export default DawerStyle;