import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Container'; 
import CampItem from './CampItem'; 

const useStyles = makeStyles((theme) => ({
    grid: {
      width: '100%',
      display: 'flex',
      marginTop: '30px'
    },
    card: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
}));

export default function CampsList() {
    const classes = useStyles();

    return (
        <Grid 
            container
            spacing={2} 
            className={classes.grid}
            >
            <Grid item xs={3}>
                <CampItem className={classes.card}/> 
            </Grid>
            <Grid item xs={3}>
                <CampItem className={classes.card}/> 
            </Grid>
            <Grid item xs={3}>
                <CampItem className={classes.card}/> 
            </Grid>
        </Grid>
    )
}

