import React from 'react'
import GetReviews from './GetReviews';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/Styles';
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    Admin:{
        marginTop: "-19px !important"
    }
  }));
=======
import GetUsers from './Users/GetUsers';
import styled from 'styled-components';

const Title = styled.div`
display: flex;
margin-left: 13%; 
align-items: center;
`;

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px;
justify-content: even;
border-bottom: 1px solid #969696;
`;
>>>>>>> becea5c5 (Added User CRUD, update and delete forms, updated Admin Panel)

function Admin() {
    const classes = useStyles();
    return (
        <>
<<<<<<< HEAD
        <Navbar />
        
        <div className={classes.Admin}>
        <h1>Welcome to the Admin Dashboard</h1>
=======
        <Title><h1>Welcome to the Admin Dashboard</h1></Title>
>>>>>>> becea5c5 (Added User CRUD, update and delete forms, updated Admin Panel)
        
        <Container>
            <GetUsers />
            <GetReviews /> 
        </Container>
       
        
        </div>

        <Footer />
        </>
    )
}

export default Admin;