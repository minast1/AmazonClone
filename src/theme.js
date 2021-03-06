import { createMuiTheme ,fade} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffad33',
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
    
  }
  
});

export default theme;