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
                    <ul>
                        <li>Place1</li>
                        <li>Place2</li>
                    </ul>
                </Paper>
            </div>
        </Container>
    )
}

export default UserPage; 