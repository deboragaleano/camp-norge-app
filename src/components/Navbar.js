import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles'; 

function Navbar(props){
    const {classes} = props; 

    return (
            <AppBar position="static" color='primary'>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                    </IconButton>
                    <Typography
                        className={classes.title}
                        variant='h6'
                        color='inherit'
                    >
                        Campgrounds
                    </Typography>
                    <div className={classes.grow}/>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    )
}

export default withStyles(styles)(Navbar); 