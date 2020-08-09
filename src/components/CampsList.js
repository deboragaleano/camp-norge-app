import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Container from '@material-ui/core/Container'; 
import CampItem from './CampItem'; 

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

const CampsList = props => {
    const classes = useStyles();

    return (
        <Container >
            <Grid container spacing={1} className={classes.grid}>
                {props.camps.map(camp => (
                <Grid  key={camp.id} item xs={12} >
                    <CampItem className={classes.card} camp={camp} /> 
                </Grid>
               ))}
            </Grid>
        </Container>
    )
}

export default CampsList; 