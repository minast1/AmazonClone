import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Box, ButtonBase, Container, Link, Paper } from '@material-ui/core';
import { signOut } from 'next-auth/client';
import { Session } from 'next-auth';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  link : {
    color : 'blue',
    '&:hover' : {
      cursor : 'pointer'
    }
  }
}));

type AppProps = {
  session: Session
}

export default function SimplePopover({session}: AppProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  
   //console.log(user)
  return (
    <div>
      <ButtonBase aria-describedby={id}  color="primary" onClick={handleClick} disableRipple>
        <Box display='flex' flexDirection='column'>
          <span style={{fontSize : '12px'}}>Hello , {session ? session.user?.name : 'Sign in'}</span>
          <Box style={{fontWeight : 700 , fontSize : '15px'}} display='flex' alignItems='center'>
            Account & Lists
            <ArrowDropDownIcon fontSize='small'/>
            </Box>
           
        </Box>
      </ButtonBase>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{marginTop : '8px'}}
      >
        <Box  p={2} width="300px" display='flex' flexDirection='column'>
          {session  ? (
             <Button variant="contained" color='primary' style={{width : '100%'}} 
             onClick={(event) => {
               event.preventDefault() ;
               signOut({callbackUrl : process.env.NEXT_PUBLIC_URL})
             }}
             >Sign out</Button>
          ) : (
            <React.Fragment>
                   <Button variant="contained" color='primary' style={{width : '100%'}} href="/auth/credentials-signin">Sign in</Button>
        <Box alignSelf="center" style={{color : 'gray'}} pt={1} fontSize="11.5px">New customer? <Link 
        className={classes.link} href="/auth/credentials-signin">start here</Link></Box>
            </React.Fragment>
          )}
        
        </Box>
      
      </Popover>
    </div>
  );
}
