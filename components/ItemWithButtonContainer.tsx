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







const useStyles = makeStyles(theme => ({
  root: {
        minWidth: 290,
        minHeight: 60
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
    },
     submit: {
    margin: theme.spacing(1, 0, 2),
    
  },
}));


export default function ItemWithButtonContainer() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h3" style={{fontSize: '1.2rem' , fontWeight: 600}}>
          Sign in for the best experience
        </Typography>
       
        <Box pt={2}>
                   <Button
             fullWidth
             color="primary"          
            variant="contained"
              disableElevation={true}         
             size='small'
             className={classes.submit}
           >
             Sign in securely
           </Button>
              </Box>
            
      </CardContent>
    </Card>
  );
}