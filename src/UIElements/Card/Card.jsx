import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CardStyle from "../../assets/jss/Material-dashboard-react/CardStyle.jsx";


const Card = ( props ) =>{
    const {
     classes,
     children,
     plain,
     ...rest
    } = props;

    const classCard = classNames({
        [classes.card]:true,
        [classes.cardPlain]:plain
    });
    return(
        <div className={classCard} {...rest}>
            {children}
        </div>
    );
}

Card.propsTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(CardStyle)(Card);