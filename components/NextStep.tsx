import React from 'react'
import { Button, FormControl, InputLabel, Link, Typography } from '@material-ui/core';
import { BootstrapInput } from './BootstrapInput';
import { ErrorMessage } from '@hookform/error-message';
import { makeStyles } from '@material-ui/core/styles';
import { useFormContext, Controller} from "react-hook-form";
import { authStore } from '../src/authStore';



type IFormInput = {
  password: string | number
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


function NextStep() {
  const { register, control, trigger, formState: { errors }, getValues } = useFormContext<IFormInput>();
  const userId = authStore(state => state.userId);
  const password = authStore(state => state.password);
  const checkEmail = authStore(state => state.checkEmail);
  const classes = useStyles();
  
    return (
        <React.Fragment>
          <Typography 
              style={{marginBottom : '10px',marginTop : '7px'}} 
          variant='body2'>{userId}
          
          <Link
            onClick={async (e) => {
              e.preventDefault();
              await checkEmail()
            }
          }
            href="#"
            style={{ color: '#1769aa' , textDecoration: 'none'}}>
             {' '}
            Change
          </Link>
        </Typography>
              
              <FormControl fullWidth margin="dense" size="small" >
              <InputLabel shrink={true} error={!!errors.password}>
              Password
          </InputLabel>

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange } }) =>
              
              <BootstrapInput 
               {...register("password", {required : 'please enter your password'})}
                fullWidth 
                type="password"
                error={!!errors.password}
                autoFocus={false}
                 onChange={(e) => {
                  authStore.setState({ password: e.target.value })
                   onChange(password)
                }}
                />
                 }
              />
          
             <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }: MessageType) => <span className={classes.error}>{message}</span>}
                />
            </FormControl>
             <Button
             type="submit"
             fullWidth
             variant="contained"
             size='small'
             className={classes.submit}
           >
             Submit
           </Button>
            </React.Fragment>
    )
}

export default NextStep
