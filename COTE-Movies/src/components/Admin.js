import React from 'react'
import GetReviews from './GetReviews';
import { makeStyles } from '@material-ui/core/Styles';

const useStyles = makeStyles(theme => ({
    Admin:{
        marginTop: "-19px !important"
    }
  }));

function Admin() {
    const classes = useStyles();
    return (
        
        <div className={classes.Admin}>
        <h1>Welcome to the Admin Dashboard</h1>
        
        <GetReviews />
        
        </div>
        
    )
}

export default Admin;