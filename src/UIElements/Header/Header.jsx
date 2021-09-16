import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Menu from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import HeadderStyle from "../../assets/jss/Material-dashboard-react/Header.jsx";

const Headder = ( {...props} ) => {
    const { classes,headerName,handleDrawerToggle } = props;

    const makeBrandName = ( ) =>{
      var name;
       headerName.map((prop , key) =>{
        console.log(prop); 
        if(prop.path === props.location.pathname){
          name = prop.naveBar
        }
        return null;
       });
       return name;
    }

    return(
        <div className={classes.Header}>
          <div className={classes.HeaderNameShow}>
             <p className={classes.HeaderName}>{makeBrandName()}</p>
          </div>
          <Hidden smDown implementation="css">
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu  style={{color:"black"}} />
          </IconButton>
        </Hidden>
        </div>
    );

}

export default withStyles(HeadderStyle)(Headder);