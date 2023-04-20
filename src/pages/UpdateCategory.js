import React from 'react'
import  { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import {
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
  } from "@mui/material";
  import BaseCard from '../components/baseCard/BaseCard';
const UpdateCategory = () => {
    const [name ,setName]=useState('');
    const [description , setDescription]=useState('');
    const navigate = useNavigate();
    const handleNameChange =(event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange =( event) =>{
        setDescription(event.target.value);
    };

    const handleSubmit =(event) => {
        event.preventDefault();
    }

    const data={
        name: name,
        description : description,
    };

//     axios.post('/api/categories', data)
//     .then((response) => {
//       console.log(response);
//       // handle success
//        navigate('/Categories');
//     })
//     .catch((error) => {
//       console.error(error);
//       // handle error
//      
//     });
// };

  return (
    <Grid container spacing={0}>
        
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Category">
          <Stack spacing={3}>
          <TextField
              id="name"
              label="Category Name "
              variant="outlined"
              required
              value={name}
              //defaultValue={}
              onChange={handleNameChange}
            />
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              //defaultValue={}
              value={description}
              onChange={handleDescriptionChange}
              
            />
          </Stack>
          <br />
          <Button type='submit' variant="contained" mt={2}>
            Submit
          </Button>
        </BaseCard>
      </Grid>
      </Grid>
  )
}

export default UpdateCategory