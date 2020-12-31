import { Box, Button, FormControl, InputLabel, Link, Typography } from '@material-ui/core';
import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import { BootstrapInput } from './BootstrapInput';
import { ErrorMessage } from '@hookform/error-message';


function DefaultStep({errors , register,trigger, getValues, setemailChecked, classes, setVal}) {
    return (
        <React.Fragment>
        <FormControl fullWidth margin="dense" size="small" > 
<InputLabel shrink={true} error={!!errors.id}>
Email or mobile phone number
</InputLabel >
<BootstrapInput name="id" 
 inputRef={register({required : 'enter your email or mobile phone number'})}
  fullWidth 
  error={!!errors.id}
  onChange ={ async () => {
    const result = await trigger('id') ;
    if(result) {
      const val = getValues('id') ;
      setVal(val.toString())

    }
  }}
  />
    <ErrorMessage
        errors={errors}
        name="id"
        render={({ message }) => <span className={classes.error}>{message}</span>}
      />
</FormControl>
<Button
fullWidth
variant="contained"
size='small'
className={classes.submit}
onClick={async () => {

const result = await trigger('id') ;
 if(result) {
  setemailChecked(true);
 }
 
} }
>
Continue
</Button>
<Typography  variant="body2"style={{fontWeight : '500', fontSize:"11.4px", marginTop : '3px'}}>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </Typography>

          <Box mt="25px" pl={0}  display="flex" alignItems="center" padding={0} >
         <ArrowRightIcon />
         <Link href="#" variant="body2" style={{color: '#1769aa', fontSize : '13px'}}>
                Need help?
              </Link>
              
         </Box>
     </React.Fragment>
  
    )
}

export default DefaultStep
