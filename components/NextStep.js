import React from 'react'
import { Box, Button, FormControl, InputLabel, Link, Typography } from '@material-ui/core';
import { BootstrapInput } from './BootstrapInput';
import { ErrorMessage } from '@hookform/error-message';


function NextStep({errors , register,trigger, getValues, emailvalue, classes}) {
    return (
        <React.Fragment>
              <Typography 
              style={{marginBottom : '10px',marginTop : '7px'}} 
              variant='body2'>{emailvalue} <Link style={{color : '#1769aa'}}>Change</Link></Typography>
              
              <FormControl fullWidth margin="dense" size="small" >
              <InputLabel shrink={true} error={!!errors.password}>
              Password
              </InputLabel >
              <BootstrapInput name="password" 
               inputRef={register({required : 'please enter your password'})}
                fullWidth type="password"
                error={!!errors.password}
                autoFocus={false}/>
                <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <span className={classes.error}>{message}</span>}
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
