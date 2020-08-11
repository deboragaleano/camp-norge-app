import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'; 
import Typography from '@material-ui/core/Typography'; 
import Container from '@material-ui/core/Container'; 
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '20px', 
    },
    image: {
        width: '20%'
    },
}));

const UserPage = () => {
    const classes = useStyles(); 

    return (
        <Container className={classes.container}>
            <div>
                <Paper>
                    <img className={classes.image} src='https://avatars.dicebear.com/v2/avataaars/3fa197ba4a56aee8c78217c03c9b7a02.svg' alt='Maria'/>
                    <Divider /> 
                    <Typography variant='h2'>Maria Sergal</Typography>
                    <Divider /> 
                    <Typography variant='h4'>My Places</Typography>

                </Paper>
            </div>
        </Container>
    )
}

export default UserPage; 

//TODO:
// - SHOW name titles and link of camps only if the userId is === to current userId
// I can use a filter()... 
// Backend: in order to use the same props, I need to get access to the dummy data as well