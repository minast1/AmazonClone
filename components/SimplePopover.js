import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Box, ButtonBase, Container, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <ButtonBase aria-describedby={id} variant="contained" color="primary" onClick={handleClick} disableRipple>
        <Box display='flex' flexDirection='column'>
          <span style={{fontSize : '12px'}}>Hello,Sign in</span>
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
        <Button variant="contained" color='primary' style={{width : '100%'}}>Sign in</Button>
        <Box alignSelf="center" style={{color : 'gray'}} pt={1} fontSize="11.5px">New customer? <span style={{color : 'blue'}}>start here</span></Box>
        </Box>
      
      </Popover>
    </div>
  );
}
