import { useState } from 'react';
import { Button, TextField, Rating, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; 

export default function RecipeForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cookTime, setCookTime] = useState({
    hours: 0,
    minutes: 0,
  });
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null); 

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSave({
      title,
      description,
      cookTime,
      ingredients,
      method,
      rating,
      image, 
    });

    navigate('/'); 
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);  
  };

  const handleHoursChange = (e) => {
    setCookTime((prevState) => ({
      ...prevState,
      hours: e.target.value,
    }));
  };

  const handleMinutesChange = (e) => {
    setCookTime((prevState) => ({
      ...prevState,
      minutes: e.target.value,
    }));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: '#f4f4f4',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        maxWidth: '1100px',
        margin: 'auto',
        mt: 3,
        display: 'flex',
        justifyContent: 'space-between',
        gap: 4,
        height: '500px',
      }}
    >

      {/* Left Column: Title, Description, Rating, and Save Button */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '35%',
          gap: 3,
        }}
      >
        <TextField
          label="Recipe Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            '& .MuiInputBase-input': {
              color: '#070F2B',
            },
            '& .MuiInputLabel-root': {
              color: '#070F2B',
            },
          }}
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            '& .MuiInputBase-input': {
              color: '#070F2B',
            },
            '& .MuiInputLabel-root': {
              color: '#070F2B',
            },
          }}
        />
        <Typography sx={{ color: '#070F2B' }}>Time Required:</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Hours"
            variant="outlined"
            value={cookTime.hours}
            onChange={handleHoursChange}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            sx={{
              width: '30%',
              backgroundColor: 'white',
              borderRadius: '4px',
              '& .MuiInputBase-input': {
                color: '#070F2B',
              },
              '& .MuiInputLabel-root': {
                color: '#070F2B',
              },
            }}
          />
          <TextField
            label="Minutes"
            variant="outlined"
            value={cookTime.minutes}
            onChange={handleMinutesChange}           
            type="number"
            InputProps={{ inputProps: { min: 0, max: 59 } }}
            sx={{
              width: '30%',
              backgroundColor: 'white',
              borderRadius: '4px',
              '& .MuiInputBase-input': {
                color: '#070F2B',
              },
              '& .MuiInputLabel-root': {
                color: '#070F2B',
              },
            }}
          />
        </Box>
        <Rating
          name="rating"
          value={rating}
          precision={1}
          onChange={(event, newValue) => setRating(newValue)}
          sx={{
            color: '#070F2B',
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#070F2B',
            color: 'white',
            '&:hover': {
              backgroundColor: '#f4f2f0',
              color: '#070F2B',
            },
          }}
        >
          Add Recipe
        </Button>
      </Box>

      {/* Middle Column: Ingredients and Method */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '35%',
          gap: 2,
        }}
      >
        <TextField
          label="Ingredients"
          variant="outlined"
          multiline
          rows={8}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            '& .MuiInputBase-input': {
              color: '#070F2B',
            },
            '& .MuiInputLabel-root': {
              color: '#070F2B',
            },
          }}
        />
        <TextField
          label="Method"
          variant="outlined"
          multiline
          rows={8}
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          required
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            '& .MuiInputBase-input': {
              color: '#070F2B',
            },
            '& .MuiInputLabel-root': {
              color: '#070F2B',
            },
          }}
        />
      </Box>

      {/* Right Column: Image Input Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '25%',
          padding: '10px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{
            marginBottom: '15px',
          }}
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Recipe"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
              objectFit: 'cover',
            }}
          />
        )}
      </Box>
    </Box>
  );
}

RecipeForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
