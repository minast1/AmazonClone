import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {  Box, Grid, Link, Toolbar } from '@material-ui/core';
import SecondaryToolbar from '../components/SecondaryToolbar';
import Navbar from '../components/Navbar';
import { useSession, getSession } from 'next-auth/client'
import CustomCarousel from '../components/CustomCarousel';
import ItemContainer from '../components/ItemContainer';
import item1 from '../public/item1.jpg';
import item3 from '../public/item3.jpg';
import item6 from '../public/item6.jpg';
import item7 from '../public/item7.jpg';
import item2 from '../public/item2.jpg';
import item9 from '../public/item9.jpg';
import item10 from '../public/item10.jpg';
import mini1 from '../public/mini1.jpg';
import image14 from '../public/image14.jpg';
import mini2 from '../public/mini2.jpg';
import mini3 from '../public/mini3.jpg';
import mini4 from '../public/mini4.jpg';
import ItemWithButtonContainer from '../components/ItemWithButtonContainer';
import ImageItemContainer from '../components/ImageItemContainer';
import ItemGridContainer from '../components/ItemGridContainer';




const useStyles = makeStyles(theme => ({
  root: {
         display: 'flex',
    justifyContent: 'center',
         alignItems: 'center'
       //backgroundColor: 'yellow'
       //backgroundColor: '#e8eaf6',  
    },
  paper: {
    marginRight: theme.spacing(2),
  },
  gridContainer: {
    position: 'absolute',
    bottom: -115,
    padding: theme.spacing(2),
     
     
  },
  carouselContainer: {
      position: 'relative',
  },
  secondMain: {
    paddingLeft: theme.spacing(2),
    paddingTop: 110,
    position: 'relative',
    paddingRight: 17
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

          <Grid
            container
            direction="row"
            spacing={3}
            className={classes.gridContainer}
            >
            <Grid item xs={3}>
              <ItemContainer title="AmazonBasics" image={item1} linkText="See more"/>
            </Grid>
            <Grid item xs={3}>
              <ItemContainer title="Shop by Category" image={item7} linkText="Shop now"/>
            </Grid>
            <Grid item xs={3}>
              <ItemContainer title="Deals & Promotions" image={item3} linkText="Shop now"/>
            </Grid>
            <Grid item xs={3} container direction="column" spacing={2}>
              <Grid item>
               <ItemWithButtonContainer/>
              </Grid>
              <Grid item>
                <ImageItemContainer image={ item2}/>
               </Grid>
            </Grid>
          </Grid>
       
     </Container>
      </main>

      <main>
        <Container maxWidth={false} disableGutters={true} style={{
          backgroundColor: '#e8eaf6',
         // paddingTop: 110,
          //paddingLeft: 15
        }}>
          <Grid container spacing={3} alignItems="flex-start"   className={classes.secondMain}>
             <Grid item xs={3}>
              <ItemContainer title="Oculus" image={item9 } linkText="Shop now"/>
            </Grid>
             <Grid item xs={3}>
              <ItemContainer title="Computers & Accessories" image={item10} linkText="Shop now"/>
            </Grid>
             <Grid item xs={3}>
              <ItemGridContainer
                title="Gaming accessories"
                mainLinkText="See more"
                items={[
                  { image: mini1, linkText: 'Headsets' },
                  { image: mini2, linkText: 'Keyboards' },
                  { image: mini3, linkText: 'Chairs' },
                  {image: mini4, linkText: 'Computer mice'}
                ] }/>
            </Grid>
             <Grid item xs={3}>
              <ItemContainer title="Easy returns" image={image14} linkText="Learn more"/>
            </Grid>
          </Grid>
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
