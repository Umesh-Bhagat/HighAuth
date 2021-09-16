import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CardBodyStyle from "../../assets/jss/Material-dashboard-react/CardBodyStyle.jsx";

const CardBody = (props) =>{

    const {
        classes,
        children,
        ...rest
    }= props;

    const classCardBody = classNames({
       [classes.cardBody]:true
    });
    return(
        <div className={classCardBody} {...rest}>
            {children}
        </div>
    );
}

CardBody.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default withStyles(CardBodyStyle)(CardBody);