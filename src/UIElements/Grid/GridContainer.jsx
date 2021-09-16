import React from "react";
import ClassNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import GridContainerStyle from "../../assets/jss/Material-dashboard-react/GridContainerStyle.jsx";

function GridContainer(props) {
  const { classes, children,plain, ...rest } = props;

  const GridStyle = ClassNames({
    [classes.grid]:true,
    [classes.plainGrid]:plain
  })
  return (
    <Grid container {...rest} className={GridStyle}>
      {children}
    </Grid>
  );
}

export default withStyles(GridContainerStyle)(GridContainer);