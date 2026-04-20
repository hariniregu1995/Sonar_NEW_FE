import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Home from './Home';
import axios from 'axios';
const Addblog = () => {
const[blog,setBlog]=useState({
    name:"",
    description:"",
    author:""
});
  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value
    });
  };
   const handleSubmit = () => {
    axios.post('/api/add', blog)
      .then(() => {
        alert('Blog added successfully');
        setBlog({ name: '', description: '', author: '' });
  })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
        <Home/>
         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Blog Name" variant="outlined" name='name' onChange={handleChange} value={blog.name} /><br />
    <TextField id="outlined-basic" label="Blog Description" variant="outlined" name='description' onChange={handleChange} value={blog.description}/><br />
      <TextField id="outlined-basic" label="Blog Author" variant="outlined" name='author' onChange={handleChange} value={blog.author}/><br />
<Button variant="contained" onClick={handleSubmit}>Post</Button>
    </Box>
    </div>
  )
}

export default Addblog