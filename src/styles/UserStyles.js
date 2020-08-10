const styles = theme => ({
    root: {
      display: 'flex',
      marginTop: '20px',
      width: '50%',
      padding: '0px',
      [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap',
        height: '300px',
      },
      height: '200px',
    },
    cover: {
      width: '60%',
      borderRadius: '50%',
    }
  });
  
  export default styles;  
  
  