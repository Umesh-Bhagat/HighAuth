import {
    drawerWidth,
    transition
} from "../materials-dashboard-react";


const DashboardStyle = theme =>({
    Wrapper:{
        width:"100%",
        top:"0",
        position:"relative",
    },
   mainPanel:{
      [theme.breakpoints.up("md")]: {
       width: `calc(100% - ${drawerWidth}px)`
      },
      overflow: "auto",
      position: "relative",
      float: "right",
      ...transition,
      maxHeight: "100%",
      width: "100%",
      overflowScrolling: "touch"
   },
});

export default DashboardStyle;