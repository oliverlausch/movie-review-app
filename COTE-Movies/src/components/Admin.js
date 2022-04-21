import React from 'react'
import GetReviews from './GetReviews';
import { makeStyles } from '@material-ui/core/Styles';
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    Admin:{
        marginTop: "-19px !important"
    }
  }));

function Admin() {
    const classes = useStyles();
    return (
        <>
        <Navbar />
        
        <div className={classes.Admin}>
        <h1>Welcome to the Admin Dashboard</h1>
        
        <GetReviews />
        
        </div>

        <Footer />
        </>
    )
}

export default Admin;