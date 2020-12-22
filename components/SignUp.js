import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from 'next/image'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { FormControl, InputLabel } from '@material-ui/core';
import { BootstrapInput } from './BootstrapInput';
import Copyright from './Copyright';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    width : '90%',
    display: 'flex',
    padding : '25px',
    border : '1px solid lightgray',
    borderRadius :'4px',

    flexDirection: 'column',
    alignItems: 'center',
  },
  signup : {
    marginTop: theme.spacing(1),
    width : '90%',
    display: 'flex',
    border : '1px solid darkgray',
    display : 'flex',
    //borderRadius :'4px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    '& .MuiInputLabel-root' : {
        fontWeight : 700,
        color : theme.palette.secondary.main,
        fontFamily : 'sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize : '10px',
        }
    },
    '& .MuiButton-contained' : {
        backgroundColor : theme.palette.primary.light
    },
    '& .MuiFormControl-marginDense' : {
      marginBottom : '8px'
    }
    
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    
  },
  divider : {
    marginTop : '25px' ,
     width : 'inherit' ,
     borderBottom : '1px solid lightgray',
    // border : '1px  solid black'
     display : 'flex',
     flex : 1
  }
 
}));


export default function SignUp({triggerSignIn}) {
  const classes = useStyles();

  return (
      <div>
    <Container component="main" maxWidth="xs"  >   
      <CssBaseline />
      <Box display="flex" justifyContent="center">
      <Image src='/amazon-2.svg' width="120px" height="80px"/>
      </Box>
      
      <div className={classes.paper}>
  
        <Typography  variant="h1" style={{marginRight :'auto', fontWeight: 400, fontSize: '30px'}} component="h1">
        Create account
        </Typography>
        <form className={classes.form} noValidate>
        <FormControl fullWidth margin="dense" size="small">
        <InputLabel  htmlFor="bootstrap-input" >
        Your name
        </InputLabel>
        <BootstrapInput  value={'value'} fullWidth />
      </FormControl>
      <FormControl fullWidth margin="dense" size="small">
        <InputLabel  htmlFor="bootstrap-input" >
        Email
        </InputLabel>
        <BootstrapInput defaultValue="amaga@outlook.com"  fullWidth />
      </FormControl>
      <FormControl fullWidth margin="dense" size="small">
        <InputLabel  htmlFor="bootstrap-input" >
        Password
        </InputLabel>
        <BootstrapInput defaultValue="amaga@outlook.com"  fullWidth/>
      </FormControl>
      <FormControl fullWidth margin="dense" size="small">
        <InputLabel  htmlFor="bootstrap-input" >
        Re-enter password
        </InputLabel>
        <BootstrapInput defaultValue="amaga@outlook.com"  fullWidth />
      </FormControl>
           <Button
            type="submit"
            fullWidth
            variant="contained"
            size='small'
            className={classes.submit}
          >
            Continue
          </Button>
          <Typography  variant="body2"style={{fontWeight : '500', fontSize:"11.43px", marginTop : '3px'}}>
          By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
          </Typography>

          <Box mt="25px" pl={0}  display="flex" alignItems="center" padding={0} >
         <Typography  variant="body2"style={{fontWeight : '500', fontSize:"12px", marginTop : '3px'}}>
          Already have an account?
          </Typography>
         <Link href="#" variant="body2" style={{color: '#1769aa', fontSize : '14px', paddingLeft : '3px',
        paddingTop : '3px'}} onClick={() => triggerSignIn(true) /* sets the main signIn to true*/}>
                Sign-In
              </Link>
              <ArrowRightIcon />
         </Box>
        </form>
      </div>
  
    </Container>
    <Container maxWidth='sm'>
    <div className={classes.divider}></div>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}