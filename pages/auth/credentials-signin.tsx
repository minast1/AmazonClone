import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { useRouter } from 'next/router'
import { authStore } from '../../src/authStore';
//import { FormProvider,useForm } from "react-hook-form";


const useStyles = makeStyles(theme => ({
  root : {
    height : '100vh'
    
  }
}))

const Credentials = () => {
  const authView = authStore(state => state.authView);
 
  const classes = useStyles()
  const router = useRouter()
  const { error } = router.query
  
  React.useEffect(() => {
    error && authStore.setState({ error: error })
   
  }, []);

  return (
  
  <Container maxWidth="xl" className={classes.root}>
      {
        authView === 'sign_in' ?
          <SignIn />
          : <SignUp />
      }
</Container>
)}  

export default Credentials
