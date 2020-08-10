import React from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/UserStyles'; 

const UserItem = (props) => {
    const {classes} = props; 

  return (
      <Container align='center'>
        <Card className={classes.root}>
            <Container>
                <img className={classes.cover}
                src={props.user.image}
                alt='Some user'
            />
            </Container>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                {props.user.name}
            </Typography>
                <Button className={classes.button} variant='contained' size='small' color='secondary'>{props.user.camps} {props.user.camps > 1 ? 'Places' : 'Place'}</Button>
            </CardContent>
        </CardActionArea>
        </Card>
    </Container>
  );
}

export default withStyles(styles)(UserItem); 
    
