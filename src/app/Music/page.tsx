"use client";
import "../globals.css"
import Box from '@mui/material/Box';
import Navigation from '../router';

export default function Home() {

  return (
      <Box style={{padding:'0',margin:'0',display:'flex',width:'100vw',height:'100vh',overflow:'hidden'}}>
        <Navigation />
        <div className="rt">
        </div>
      </Box>
  );
}