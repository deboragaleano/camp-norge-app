import React from 'react';
import UserPage from './UserPage';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/CampItemStyles'; 

function CampItem(props) {
    const {classes} = props; 

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image={props.camp.image}
        title={props.camp.title}
      />
      <CardActionArea>
        <CardContent align='left'>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangin across all continents except Antarctica.
          </Typography>
            <Button className={classes.button} component={Link} to={`/${props.camp.id}`}  variant='contained' size='small' color='secondary'>View more</Button>
        </CardContent>
            <Container>
              <CardActions disableSpacing>
              <Button className={classes.button}  variant='contained' size='small' color='default'>Map</Button>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            <Container className={classes.user}>
              <IconButton aria-label="user">
                 <Avatar component={Link} to={`/users/${props.creator}`} alt="Maria" src="/static/images/avatar/1.jpg" />
              </IconButton>
              <div className={classes.nameUser}>Maria</div>
            </Container>
          </CardActions>
        </Container>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(CampItem); 