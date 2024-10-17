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
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';


export default function RecipeCard(props) {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <Card sx={{ maxWidth: 340, width:340, background: '#F8F9Fa' }}>
      <CardHeader
        sx={{ background: '#EEEEEE' }}
        action={
          <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
            <FavoriteIcon sx={{ color: isFavorited ? 'red' : '#cdd1dc' }} />
          </IconButton>
        }
        title={<Typography variant="h6" sx={{ fontSize: 15, fontWeight: 'bold', color: '#070F2B', fontFamily: 'Playfair Display, serif' }}>
          {props.title}
        </Typography>}

      />
      <CardMedia
        component="img"
        height="200"
        image={URL.createObjectURL(props.image)}
        alt={props.title}
      />
      <CardContent sx={{ flexGrow: 1}}>
        <Typography variant="body2" sx={{ color: 'text.secondary', justifyContent: 'center' }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', background: '#EEEEEE' }}>
        <Rating name="half-rating" sx={{color: '#070f2b'}} defaultValue={props.rating} precision={1} />         
        <IconButton aria-label="settings" sx={{color: '#070f2b'}} onClick={() => {props.onDelete(props.id)}}>
          <DeleteIcon />
        </IconButton>
        <DoubleArrowRoundedIcon />
      </CardActions>
    </Card>
  );
}

RecipeCard.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
  image: PropTypes.string,
};

RecipeCard.defaultProps = {
  rating: 0,
};