import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles , fade} from '@material-ui/core/styles';
import { AppBar, ButtonBase, InputBase,  Paper, Toolbar } from '@material-ui/core';
import Image from 'next/image';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import SimplePopover from './SimplePopover';
import CategoryDropdown from './CategoryDropdown';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Session } from 'next-auth';



const useStyles = makeStyles(theme => ({
  
  appBarRoot: {
    flexGrow: 1,
    backgroundColor : '#0F1111'  ,//#263238
    color : 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 
  input: {
    marginLeft: theme.spacing(0),
    paddingLeft : theme.spacing(1), 
    borderLeft: '1px solid lightgray',
    height : '40px',
    width : '100%',
    flexGrow: 1,
    '& .MuiInputBase-input' : {
      fontSize : '15px',
      '&:focus $search' : {
      
          border: `1px solid ${theme.palette.primary.main}`,
          boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        } 
    },
  },
  search: {
    display : 'flex',
    flexGrow : 0.7,
    height : '40px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.9),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
   
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  title: {
    display : 'flex',
    flexDirection : 'column',
    //flex: 1,
    paddingBottom : '8px',
    paddingLeft : '5px',
    paddingTop : '5px',
    fontSize : '12px',
    height : '40px',
    '&:hover' : {
     
    }
  },
  iconButton: {
    padding: 10,
    display : 'flex',
    alignItems : 'center',
    //flexShrink : 1, 
    backgroundColor : theme.palette.primary.light,
    //borderRadius : theme.shape.borderRadius,
  },
 
  paper: {
    marginRight: theme.spacing(2),
  },
  image: {
    objectFit: 'contain'
  }
 
}))

type AppProps = {
  session: Session | null
}
const Navbar = ({session}: AppProps) => {
  const classes = useStyles();
 
  return (
    <div>
      
        <React.Fragment>
        <AppBar position="fixed" elevation={0} className={classes.appBarRoot} > 
        <Toolbar>
          <ButtonBase  className={classes.menuButton} color="inherit" aria-label="menu" disableRipple={true}>
              <Image src='/amazon_white.png' width="95px" height="29px" className={ classes.image}/>
          </ButtonBase> 
            

          <ButtonBase disableRipple>
          <LocationOnOutlinedIcon fontSize='small'/>
                <Box display='flex' flexDirection='column' alignItems='center'>
                <span style={{fontSize : '12px', color : 'gray'}}>Deliver to</span>
                  <Box style={{fontWeight : 800 , fontSize : '13px'}}>
                    Ghana
                  </Box>
                </Box>
              </ButtonBase>
        
           <Paper component="form" className={classes.search}> 
                <CategoryDropdown/>
             <InputBase 
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <ButtonBase type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon fontSize='large'/>
      </ButtonBase>
           </Paper>
            <SimplePopover session={session}/>
            
              <ButtonBase disableRipple>
                <Box display='flex' flexDirection='column' ml={2.5} alignItems='center' pb={0.5}>
                <span style={{fontSize : '12px'}}>Returns</span>
                  <Box style={{fontWeight : 700 , fontSize : '15px'}}>
                    & Orders
                  </Box>
                </Box>
              </ButtonBase>
          
          <Box display='flex' alignItems='center'ml='auto'>
            <ButtonBase disableRipple>
            <ShoppingCartOutlinedIcon fontSize='large'/>
            <Box fontWeight='fontWeightBold'>Cart</Box>
            </ButtonBase>
          </Box>
        </Toolbar>
      </AppBar>
       </React.Fragment>
    </div>
)}  

export default Navbar
