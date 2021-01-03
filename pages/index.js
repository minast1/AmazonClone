import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {  Box, Link, Toolbar } from '@material-ui/core';
import SecondaryToolbar from '../components/SecondaryToolbar';
import Navbar from '../components/Navbar';
import { useSession, getSession } from 'next-auth/client'

const useStyles = makeStyles(theme => ({
  
  paper: {
    marginRight: theme.spacing(2),
  },
 
}))

const NextAuth = ({session}) => {
  const classes = useStyles();
  
  return (
    <div>
      
        <React.Fragment>
        <Navbar session={session}/>
      <Toolbar/>
      <SecondaryToolbar/>
       </React.Fragment>

      <Container   className={classes.root} >
        i am the container
     </Container>
    
    </div>
)}  

export async function getServerSideProps({req}) {

      const session  =  await getSession({req}) ;
    
      return {
        props : {
          session
        }
      }
}
 export default NextAuth
