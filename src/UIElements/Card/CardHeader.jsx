import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CardHeaderStyle from "../../assets/jss/Material-dashboard-react/CardHeaderStyle.jsx";



const CardHeader = ( props ) =>{
    const {
        classes,
        children,
        ...rest
    } = props

    const CardHeaderClasses = classNames({
        [classes.CardHeader]:true
    });
    return(
        <div className={CardHeaderClasses}{...rest}>
            {children}
        </div>
    );
}

CardHeader.propTypes={
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}
export default withStyles(CardHeaderStyle)(CardHeader);