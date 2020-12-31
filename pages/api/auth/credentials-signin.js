import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from '../../../components/SignIn';
import SignUp from '../../../components/SignUp';


const useStyles = makeStyles(theme => ({
  root : {
    height : '100vh'
    
  }
}))

const Credentials = () => {
  const [signIn, setsignIn] = useState(true)
  const classes = useStyles()
  return (
  
  <Container maxWidth="xl" className={classes.root} >
      {signIn ? <SignIn triggerSignUp={setsignIn}/> : <SignUp triggerSignIn={setsignIn}/>}
</Container>
)}  

export default Credentials
