import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  Box  from '@material-ui/core/Box';
import Image from 'next/image';
import  Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
        minWidth: 290,
        minHeight: 420
  },
  bullet: {
    display: 'inline-block',
    margin: '0 1px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
     marginBottom: 12,
    },
    image: {
      objectFit: 'cover'
  }
});

type GridProps = {
    image: StaticImageData
    linkText: string
}

type AppProps = {
    title: string
    items: GridProps[],
    mainLinkText: string
}

export default function ItemGridContainer({title , items, mainLinkText}: AppProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h3" style={{fontSize: '1.2rem' , fontWeight: 600}}>
          {title}
        </Typography>
              <Grid container >
                  {items.map(({ image, linkText }, index) =>
                      
                   <Grid item xs={6} key={index}>
                      <Box mt={2}>
                        <Image src={image} width={140} height={117} />
                         <span>{ linkText}</span>
                      </Box>
                     
                  </Grid>
                 )}
                 
              </Grid>
            
      </CardContent>
      <CardActions style={{marginLeft: 10}}>
              <Link>{mainLinkText }</Link> 
      </CardActions>
    </Card>
  );
}