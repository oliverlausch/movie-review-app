import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";


const Footer= () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/#">
          COTE Reviews
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'} 
        <br />
        {'Created by Callum Tremayne, Oliver Lausch, Thomas Perrin & Edward Meek'}
      </Typography>
    );
}
export default Footer 