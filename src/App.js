import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import Sidebar from './Sidebar';
import Dashboard from './components/Dashboard';
import ResumesList from './components/ResumesList';
import CreateResume from './components/CreateResume';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  return (
    <>
      <BrowserRouter>
        <Grid container>
          <Grid>
            <Item><Sidebar /></Item>
          </Grid>
          <Grid item md={6}>
            <Toolbar />
            <Item>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/resumes' element={<ResumesList />} />
                <Route path='/create' element={<CreateResume />} />
              </Routes>
            </Item>
          </Grid>
          <Grid item md={4}>
            <Toolbar />
            <Item sx={{ height: '100vh', backgroundColor: 'lightblue' }}>Recommendation Service</Item>
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
