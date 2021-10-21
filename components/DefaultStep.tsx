import { Box, Button, FormControl, InputLabel, Link, Typography } from '@material-ui/core';
import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import { BootstrapInput } from './BootstrapInput';
import { ErrorMessage } from '@hookform/error-message';
import { useFormContext, Controller} from "react-hook-form";
import { authStore } from '../src/authStore';


type IFormInput = {
  id: string | number
}

type MessageType = {
  message: string | React.ReactElement
}


const useStyles = makeStyles((theme) => ({
  error : {
    color : 'red',
    fontSize : '11px'
  },
   submit: {
    margin: theme.spacing(1, 0, 2),
    
  },
 
}));

function DefaultStep() {
  const { register, control, trigger, formState:{errors}, getValues} = useFormContext<IFormInput>();
    const checkEmail = authStore(state => state.checkEmail); 
  // const setId = authStore(state => state.setId);
  const userId = authStore(state => state.userId);
  const classes = useStyles();

 // console.log(userId);
  const idContainsOnlyDigits = (id : string ): boolean => {
      return id.match(/^[0-9]+$/) != null ? true : false 
   }

    return (
      <React.Fragment>
       
        <FormControl fullWidth margin="dense" size="small" > 
          <InputLabel
            shrink={true}
          error={!!errors?.id}
          >
         Email or mobile phone number
          </InputLabel >

           <Controller
            name="id"
            control={control}
            //defaultValue={userId}
            
            render={({ field : {onChange, value}}) =>
              
              <BootstrapInput
                {...register("id", {required : 'Please enter a valid email or phone number'})}
                value={userId}
               fullWidth 
               error={!!errors.id}
                onChange={(e) => {
                  if (idContainsOnlyDigits(e.target.value)) {
                      authStore.setState({ userId: Number(e.target.value) })
                      onChange(Number(userId))
                  }
                  else {
                     authStore.setState({ userId: e.target.value })
                  onChange(userId)
                   }
                  
                }}
                />
          }
           />
          <ErrorMessage
            errors={errors}
            name="id"
            render={({ message } : MessageType)  => <span className={classes.error}>{message}</span>}
          />
      </FormControl>
      <Button
      fullWidth
      variant="contained"
          size='small'
          onClick={async () => {
            const isValidated = await trigger('id');
            isValidated &&  await checkEmail()
          }}
      className={classes.submit}>
      Continue
      </Button>
<Typography  variant="body2"style={{fontWeight : 'lighter', fontSize:"11.4px", marginTop : '3px'}}>
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
