import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect,withRouter } from "react-router-dom";

import SideBar from "../../UIElements/SideBar/SideBar";
import HeaderBar from "../../UIElements/Header/Header";
import LogoImage from "../../assets/image/sttepalinkLogo.png"
import dashboardRoutes from "../../routes/HighAuthRoutes/Dashboard";
import DashboardStyle from "../../assets/jss/Material-dashboard-react/DashboardStyle.jsx";

const  switchRoutes = ( 
   <Switch>
      {dashboardRoutes.map((prop, key) => {
         if (prop.redirect){
           return <Redirect to={prop.to} key={key} />; //There is no use of this code in this program..
         }
         return <Route path={prop.path} component={prop.component} key={key} />;
      })}
   </Switch>
);

class Dashboard extends Component{
   state = {
       mobileOpen:false
   }

   DrawerToggle = ( )=>{
     this.setState({mobileOpen:!this.state.mobileOpen});
   }

   render(){
       const { classes ,image, ...rest} = this.props;
     console.log(this.props)
       return(
           <div className={classes.Wrapper}>
             <SideBar
              drawerToggle={this.DrawerToggle}
              open={this.state.mobileOpen}
              image={LogoImage}
              logoText="STTEPALINK"
              color="gray"
              routes={dashboardRoutes}
              {...rest}
             />
             <div className={classes.mainPanel}>
                   <HeaderBar
                     headerName={dashboardRoutes}
                     handleDrawerToggle={this.DrawerToggle}
                     {...rest}
                   />
                   <div>
                   <div className={classes.container}>{switchRoutes}</div>
                   </div>
             </div>
           </div>
       );
   }
}

export default withRouter(withStyles(DashboardStyle)(Dashboard));
