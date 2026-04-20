import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
          <Link to="/"><Button color="inherit" style={{color:'white'}}>Home</Button></Link>
    <Link to="/addblog"><Button color="inherit" style={{color:'white'}}>Add Blog</Button></Link>
        <Link to="/viewblog"><Button color="inherit" style={{color:'white'}}>View Blog</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    
    </div>
  )
}

export default Home