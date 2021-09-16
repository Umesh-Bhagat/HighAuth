import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CardFooterStyle from "../../assets/jss/Material-dashboard-react/CardFooterStyle.jsx";

const CardFooter = ( props ) =>{
    const {
        classes,
        children,
        ...rest
    }=props

    const CardFooterClasses = classNames({
        [classes.cardFooter]:true
    });
 return(
     <div className={CardFooterClasses} {...rest}>
         {children}
     </div>
 );   
}

CardFooter.propTypes ={
    classes:PropTypes.object.isRequired,
    className:PropTypes.string,
}

export default withStyles(CardFooterStyle)(CardFooter);