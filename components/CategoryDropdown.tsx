import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ButtonBase } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  dropdown: {
    paddingLeft : '10px'
  },
  menuRoot: {
    '& .MuiMenuItem-dense' : {
        //paddingBottom: 0 ,
        //paddingTop : 0,
        paddingRight : '40px',
        paddingLeft : '5px',
       // maxWidth: 360,
        '&:hover' : {
          backgroundColor : 'lightgray'
        }
      }
  },
}));

export default function CategoryDropdown() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <React.Fragment>
    <ButtonBase className={classes.dropdown}
    ref={anchorRef}
    aria-controls={open ? 'menu-list-grow' : undefined}
    aria-haspopup="true"
    onClick={handleToggle}>
    All
    <ArrowDropDownIcon/>
 </ButtonBase>
 <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
{({ TransitionProps, placement }) => (
<Grow
  {...TransitionProps}
  style={{ transformOrigin: placement === 'bottom' ? 'bottom start' : 'center bottom' ,
marginTop : '5px',marginLeft : '60px'}}
>
  <Paper> 
    <ClickAwayListener onClickAway={handleClose}>
      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} className={classes.menuRoot}>
        <MenuItem  dense={true} onClick={handleClose}>Profile</MenuItem>
        <MenuItem  dense={true} onClick={handleClose}>My accountgggggggggggggg</MenuItem>
        <MenuItem dense={true} onClick={handleClose}>Logout</MenuItem>
      </MenuList>
    </ClickAwayListener>
  </Paper>
</Grow>
)}
</Popper>
</React.Fragment>
  );
}
