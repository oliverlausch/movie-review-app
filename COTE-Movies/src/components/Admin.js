import React from 'react'
import GetReviews from './GetReviews';
import { makeStyles } from '@material-ui/core/Styles';
import Navbar from './Navbar';
import Footer from './Footer';
import GetUsers from './Users/GetUsers';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px;
justify-content: flex-start;
border-bottom: 1px solid #969696;
`;

const Container1 = styled.div`
display: flex;
flex-direction: column;
width: 25%;
`;

const Container2 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
`;

const useStyles = makeStyles(theme => ({
    Admin:{
        marginTop: "-22px !important",
        marginBottom: "10px"
    }
  }));

function Admin() {
    const classes = useStyles();
    return (
        <>
        <Navbar />
        
        <div className={classes.Admin}>
        <h1>Welcome to the Admin Dashboard</h1>
        
        <Container>
        <Container1>
        <GetUsers />
        </Container1>
        <Container2>
        <GetReviews />
        </Container2>
        </Container>
       
        
        </div>

        <Footer />
        </>
    )
}

export default Admin;