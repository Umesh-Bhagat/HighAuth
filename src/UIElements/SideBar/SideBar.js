import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import Hidden from '@material-ui/core/Hidden';
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import DrawerStyle from "../../assets/jss/Material-dashboard-react/DrawerStyle.jsx"

const SideBar = ( {...props} ) =>{
    const { classes ,open,drawerToggle,image,color,logoText,routes} = props;
    function activeRoute(routeName){
      console.log(routeName)
     return props.location.pathname.indexOf(routeName) > -1 ? true : false;
   }

    let linkButton = (
     <List className={classes.list}>
       {routes.map((prop , key) => {
         var activePro =" "
         var activeButton ;
         activeButton= classNames({
           [" " + classes[color]]: activeRoute(prop.path)
         });

         const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.path)
        });
       return(  
         <NavLink 
           to={prop.path}
           activeClassName="active"
           className={activePro + classes.item}
           key={key}
          >
           <ListItem button  className={classes.itemLink + activeButton}>
             <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
              {typeof prop.icon === 'string' ?(
               <Icon> 
                 {prop.icon} 
               </Icon>
              ):(
                <prop.icon/>
              )}
             </ListItemIcon>
             <ListItemText
               primary={prop.sideBar}
               className={classes.itemText + whiteFontClasses}
               disableTypography={true}
             />
           </ListItem>
         </NavLink>
       );
       })}
     </List>
    )

   var  BrandLogo = (
     <div className={classes.logo}>
       <div className={classes.logoLink}>
         <div className={classes.logoImage}>
            <img className={classes.Image}  src={image} alt="infoImage"/>
         </div>
         {logoText}
        </div>
     </div>
   );
    return(
      <div>       
          <Hidden smDown implementation="css">
              <Drawer
               anchor="left"
               variant="permanent"
               open
               classes={{
                   paper:classes.drawerPaper
                }}
              >
                {BrandLogo}
                <div className={classes.sidebarWrapper}>
                 {linkButton}
                 </div>
                 {image !== undefined ? (
                     <div
                       className={classes.background}
                     />
                   ) : null}
              </Drawer>
          </Hidden>
          <Hidden mdUp implementation="css">
            <Drawer
             anchor="right"
             open={open}
             onClose={drawerToggle}
             variant="temporary"
             classes={{
                 paper:classes.drawerPaper
             }}
             ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            >
              <button style={{width:"120px", margin:"2% 1%"}}>1</button>
              <button style={{width:"120px", margin:"2% 1%"}}>2</button>
              <button style={{width:"120px", margin:"2% 1%"}}>3</button>
              <button style={{width:"120px", margin:"2% 1%"}}>4</button>
              <button style={{width:"120px", margin:"2% 1%"}}>5</button>
              <button style={{width:"120px", margin:"2% 1%"}}>6</button>
            </Drawer>
          </Hidden>
      </div>
    );
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(DrawerStyle)(SideBar);