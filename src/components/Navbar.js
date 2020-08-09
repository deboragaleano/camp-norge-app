import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles'; 

function Navbar(props){
    const {classes} = props; 

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
            <AppBar position="static" color='primary'>
                <Toolbar>
                    
                    <IconButton edge='start' color="inherit">
                        <MenuIcon className={classes.menuButton}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem component={NavLink} to='/' onClick={handleClose}>Campgrounds</MenuItem>

                        <MenuItem component={NavLink} to='/u1/campgrounds' onClick={handleClose}>My campgrounds</MenuItem>

                        <MenuItem component={NavLink} to='/campgrounds/new' onClick={handleClose}>Add new camp</MenuItem>

                        <MenuItem component={NavLink} to='/campgrounds/new' onClick={handleClose}>Authenticate</MenuItem>

                    </Menu>
                    
                
                    <NavLink to='/' style={{textDecoration: 'none', color: 'white', hover: 'pink'}}>
                        <Typography className={classes.title} variant='h6'>
                            Campgrounds
                        </Typography>
                    </NavLink>


                    <div className={classes.grow}/>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
    )
}

export default withStyles(styles)(Navbar); 