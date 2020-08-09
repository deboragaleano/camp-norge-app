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
  }
});

export default styles;  

