import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {  Box, Grid, Link, Toolbar } from '@material-ui/core';
import SecondaryToolbar from '../components/SecondaryToolbar';
import Navbar from '../components/Navbar';
import { useSession, getSession } from 'next-auth/client'
import CustomCarousel from '../components/CustomCarousel';
import ItemContainer from '../components/ItemContainer';

const useStyles = makeStyles(theme => ({
  root: {
  
       //backgroundColor: 'yellow'
       //backgroundColor: '#e8eaf6',  
    },
  paper: {
    marginRight: theme.spacing(2),
  },
  gridContainer: {
    position: 'absolute',
    bottom: -120,
    padding: theme.spacing(2),
     
     
  },
  carouselContainer: {
      position: 'relative',
  }
}))

const Home = () => {
  const [session, loading] = useSession();
  const classes = useStyles();
  
  return (
    <div style={{backgroundColor: 'yellow'}}>
      
        <header>
        <Navbar session={session}/>
      <Toolbar/>
      <SecondaryToolbar/>
       </header>

       <main className={classes.root}>
      <Container className={classes.carouselContainer} disableGutters={true} maxWidth={false}>
       
          <CustomCarousel />

           <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item xs={3}>
              <ItemContainer/>
            </Grid>
            <Grid item xs={3}>
              <ItemContainer/>
            </Grid>
            <Grid item xs={3}>
              <ItemContainer/>
            </Grid>
            <Grid item xs={3} container direction="column">
              <Grid item>
                <ItemContainer/>
              </Grid>
               <Grid item>horizontal item 2</Grid>
             </Grid>
          </Grid>
       
     </Container>
      </main>

      <main>
        <Container maxWidth={false} disableGutters={true} style={{
          backgroundColor: '#e8eaf6',
          paddingTop: 100
        }}>
           Next up
        </Container>
      
      </main>
    </div>
)}  

/*export async function getServerSideProps({req}) {

      const session  =  await getSession({req}) ;
    
      return {
        props : {
          session
        }
      }
}*/
 export default Home
