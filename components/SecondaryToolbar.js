import { Box, ButtonBase, List, ListItem, ListItemText, Toolbar } from "@material-ui/core";
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles(theme => ({
   root : {
       backgroundColor : '#263238',
       color : 'white',
      // flexGrow : 1,
       minHeight: 30,
       height : '43px'
   },
   horizontalList : {
    margin : theme.spacing(1),
    width  : '100%',
           '& .MuiButtonBase-root' : {
             padding : theme.spacing(0.9),
             fontSize : '14px',
             '&:hover' : {
                border : '1px solid white'
             }
            
           }
       },
   hover : {
       '&:hover' : {
           cursor : 'pointer',
           border : '1px solid white',
           padding  : 4
       }
   },
   menu: {
       marginRight : theme.spacing(2)
   }
}))
  
function SecondaryToolbar() {
    const classes = useStyles();
    return (
        <div>
           <Toolbar className={classes.root}>
                   <ButtonBase className={classes.menu}>
                   <MenuIcon /> 
                   <Box component='span'  fontWeight="fontWeightBold">All</Box>
                   </ButtonBase> 

                   <Box component='nav' display='flex' alignItems="center" className={classes.horizontalList}>
                      <ButtonBase disableRipple>Today's Deals</ButtonBase>  
                      <ButtonBase disableRipple>Customer Service</ButtonBase> 
                      <ButtonBase disableRipple>Gift Cards</ButtonBase> 
                      <ButtonBase disableRipple>Sell</ButtonBase> 
                      <Box flexGrow={1}><ButtonBase disableRipple>Registry</ButtonBase></Box>
                      <ButtonBase style={{fontWeight : 600}} disableRipple>Amazon's response to COVID-19</ButtonBase>
                   </Box>
            </Toolbar> 
        </div>
    )
}

export default SecondaryToolbar
