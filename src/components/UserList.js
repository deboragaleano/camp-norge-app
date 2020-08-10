import React from 'react';
import UserItem from './UserItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Container from '@material-ui/core/Container'; 

const useStyles = makeStyles((theme) => ({
    grid: {
        maxWidth: '100%',
        minHeight: '100vh',
        margin: '20px' 
    },
    card: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
}));

const UserList = (props) => {
    const classes = useStyles();
    
    return ( 
        <Container >
            <Grid container spacing={1} className={classes.grid}>
                {props.users.map(user => (
                <Grid  key={user.id} item xs={12} >
                    <UserItem className={classes.card} user={user} /> 
                </Grid>
            ))}
            </Grid>
        </Container>    
    )
}

export default UserList; 