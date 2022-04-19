import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { capitalize} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SecondaryToolbar from '../../components/SecondaryToolbar';
import Navbar from '../../components/Navbar';
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { categories, Product, fetcher } from '../../src/constants';
import CategoryProducts from '../../components/CategoryProducts';
import ItemCard from '../../components/ItemCard';
import useSWR from 'swr'


const useStyles = makeStyles(theme => ({
  root: {
       
    },
 
  rightContainer: {
    paddingLeft: theme.spacing(2),
    borderLeft: '1px solid lightgray',
    borderLeftWidth: 2
  },
  leftContainer: {
    paddingRight:2 
  }
  
}))


const Products = () => {
  const [session, loading] = useSession();
   const {data , error} = useSWR<Product[]>(`https://fakestoreapi.com/products?limit=12`, fetcher)
  const router = useRouter();
  const { pid } = router.query;

 // cosnt fetchAllProducts
  const classes = useStyles();
  //console.log(pid);
  return (
    <div>
      
        <header>
        <Navbar session={session}/>
      <Toolbar/>
      <SecondaryToolbar/>
       </header>

       <main className={classes.root}>
      <Container  maxWidth={false} style={{paddingTop: 15}}>
          <Grid container>
            <Grid item xs={2} container direction="column" className={classes.leftContainer}>
              <Typography variant="body2" style={{ fontWeight: 700 }}>Categories</Typography>
              {
                categories.map((category, index) => 
                   <Box pl={2} pt={1} key={index}>
                    <Typography variant="body2" style={{ fontWeight: 700 }} gutterBottom>{capitalize(category) }</Typography>
                    <CategoryProducts category={ category}/> 
              </Box>
                )
              }
              
            </Grid>
            <Grid item xs={10} container className={classes.rightContainer}>
              <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>{pid}</Typography>
              <Typography variant="body2" gutterBottom>The fucking subheader and mini categories goes here</Typography>
              <Box border="1px solid lightgray" mt={4} p={2} borderRadius={15}>
                <Typography variant="body1">
                  1-12 of over 90,000 results for <span style={{fontWeight: 'bold', color: '#ff5722'}}>{pid }</span>
                </Typography>
                </Box>
                <Box mt={4} display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                 
                 {data && data.map(({ id, title, price, image, description, rating = Math.floor(Math.random() * 6)}) => 
                    
                   <Box
                     onClick={() => router.push({
                       pathname: '/items/[pid]',
                       query: {
                         pid: id,
                         title: title,
                       }
                     })}
                      p={2}
                      width={355}
                      key={id}>
                     <ItemCard
                       image={image}          
                       price={price}
                       title={title}
                       description={description}
                     />
                   </Box>
                  )}
                </Box>
               
              </Grid>
             
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
 export default Products
