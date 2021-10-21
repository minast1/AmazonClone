import { makeStyles,withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel , InputBase, fade, Divider} from '@material-ui/core';


const CustomSelect = withStyles((theme) => ({
    root:{
      'label + &': {
        //marginTop: theme.spacing(3),
        
      },
     
    },
   
    input: {
      borderRadius: 4,
      padding : theme.spacing(1.2,0),
      position: 'relative',
     backgroundColor: theme.palette.common.white ,
      border: '1px solid #ced4da',
      fontSize: 16,
      //width: 'auto',
      //padding: '10px  12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus':  {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  
      },
    },
  }))(InputBase);

  export {CustomSelect}