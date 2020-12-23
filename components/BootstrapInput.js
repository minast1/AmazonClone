import { makeStyles,withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel , InputBase, fade, Divider} from '@material-ui/core';


const BootstrapInput = withStyles((theme) => ({
    root: props => ({
      'label + & input ': {
        marginTop: theme.spacing(2),
        borderColor : props.error ?'red' : '#ced4da'
        // color : props.error ? 'red' : ''
      },
     
    }),
   
    input: {
      borderRadius: 4,
      position: 'relative',
     backgroundColor: theme.palette.common.white ,
      border: '1px solid #ced4da',
      fontSize: 14,
      //width: 'auto',
      padding: '6px 10px',
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
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor:   theme.palette.primary.main,
      },
    },
  }))(InputBase);

  export {BootstrapInput}