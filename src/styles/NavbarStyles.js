const styles = theme => ({
    root: {
        width: '100%',
        marginBottom: 0
    },
    grow: {
        flexGrow: 1
    },
    menuBottom: {
        marginRight: theme.spacing(2),
    },
    //this is showing and hiding content at a certain breakpoint 
    // this is like media-query or something.. 
    // if it's below small screen size then it should not show up
    title: {
        display: 'none',
        textDecoration: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
        marginRight: theme.spacing(2),
    },
});

export default styles; 