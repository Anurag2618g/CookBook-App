import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function RecipeCard(props) {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => {props.onDelete(props.id)}}>
            <DeleteIcon />
          </IconButton>
        }
        title={props.title}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt={props.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon sx={{ color: isFavorited ? 'red' : 'gray' }} />
        </IconButton>
        <Rating name="half-rating" defaultValue={props.rating} precision={1} />
      </CardActions>
    </Card>
  );
}

RecipeCard.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.number.isRequired,
  key: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

RecipeCard.defaultProps = {
  rating: 0,
};