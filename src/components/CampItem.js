import React, {useState} from 'react';
import {useParams, Link} from 'react-router-dom'; 
// import UserPage from './UserPage';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/CampItemStyles'; 

function CampItem(props) {
    const {classes} = props; 
    const userId = useParams().userId; 

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.camp.address}</h2>
            <p id="transition-modal-description">HERE THE MAP WILL GO</p>
          </div>
        </Fade>
      </Modal>
    </div>

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
            <Button className={classes.button} variant='contained' size='small' color='secondary'>Do something</Button>
        </CardContent>
            <Container>
              <CardActions disableSpacing>
              <Button className={classes.button} onClick={handleOpen} variant='contained' size='small' color='default'>Map</Button>
              <IconButton aria-label="edit" component={Link} to={`/${props.camp.id}`}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" component={Link} to='/'>
                <DeleteIcon />
              </IconButton>
            <Container className={classes.user}>
              <IconButton aria-label="user">
                 <Avatar component={Link} to={`/users/${userId}`} alt="Maria" src="/static/images/avatar/1.jpg" />
              </IconButton>
              <div className={classes.nameUser}>Maria</div>
            </Container>
          </CardActions>
        </Container>
      </CardActionArea>
    </Card>
    </>
  );
}

export default withStyles(styles)(CampItem); 