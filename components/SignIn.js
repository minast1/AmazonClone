import React, { useState } from 'react';
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
import { FormControl, InputLabel , Divider, FormHelperText} from '@material-ui/core';
import DividerWithText from './DividerWithText';
import Copyright from '../components/Copyright'
import {BootstrapInput} from '../components/BootstrapInput'
import NextStep from './NextStep';
import DefaultStep from './DefaultStep';
import { useForm } from "react-hook-form";

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
    '& .Mui-error' :  {
      color : 'red',
      borderRadius : 'red'
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
  },
  error : {
    color : 'red',
    fontSize : '11px'
  }
 
}));



export default function SignIn({triggerSignUp}) {
  const classes = useStyles();
  const {register ,handleSubmit, errors, getValues, trigger} = useForm() ;
  const [emailChecked, setemailChecked] = useState(false);
  const [emailvalue, setVal] = useState("")
  const onSubmit = (data) => {
    if(!data.id) {
      data.userId = emailvalue ;
    }
      console.log(data)
  }
  return (
      <div>
    <Container component="main" maxWidth="xs"  >
      <CssBaseline />
      <Box display="flex" justifyContent="center">
      <Image src='/amazon-2.svg' width="120px" height="80px"/>
      </Box>
      
      <div className={classes.paper}>
  
        <Typography  variant="h1" style={{marginRight :'auto', fontWeight: 540, fontSize: '30px'}} component="h1">
        Sign-In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          {emailChecked ? (
               <NextStep
               errors={errors}
               register={register}
               trigger={trigger}
               getValues={getValues}
               emailvalue={emailvalue}
               classes={classes}/>
          ) :
           (
              <DefaultStep 
              errors={errors}
              register={register}
              trigger={trigger}
              getValues={getValues}
              setemailChecked={setemailChecked}
              classes={classes}
              setVal={setVal}/>
          )}
        
         
        </form>
      </div>

      <Box  width="90%" mt={2}>
         <DividerWithText>New to Amazon?</DividerWithText> 
     </Box>
         
      <Box className={classes.signup}>
         
          <Button color="inherit" variant='contained' disableElevation={true} 
          fullWidth size='small' onClick={ () => triggerSignUp(false) /* sets the main signIn to false*/}> 
              Create your Amazon account
          </Button>
      </Box>
     
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