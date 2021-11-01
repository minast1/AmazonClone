import { createMuiTheme ,fade} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff9800',
      light : '#ffad33'
    },
    secondary: {
      main: '#000000', //black
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography : {
    button : {
      textTransform : 'none'
    },
    fontFamily : "Amazon Ember, Ariel, sans-serif"
  },
  overrides : {
    MuiLink: {
      root: {
        color: '#1769aa',
        fontSize: 12,
        '&:hover': {
          color: '#ffad33',
          cursor: 'pointer'
        }
       }
     }
  }
  
});

export default theme;