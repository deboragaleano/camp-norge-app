import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/CampItemStyles'; 


function CampItem(props) {
    const {classes} = props; 

    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia className={classes.media}> 
                <img src={props.camp.image} alt='some some'/>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 {props.camp.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.camp.description}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
        </Card>
    );

}

export default withStyles(styles)(CampItem); 