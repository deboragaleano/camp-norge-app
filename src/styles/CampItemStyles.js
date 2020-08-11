const styles = theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      height: '400px'
    },
    height: '300px',
  },
  cover: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '200px'
    },
  }, 
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  nameUser: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  button: {
    palette: {
      primary: '#009688',
    },
  },
  link: {
    underline: 'none' 
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

export default styles;  

