import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import "./globals.css"

function Navigation() {
  const router = useRouter();
  return (
    <div className="lt">
      <h5 style={{textAlign:"center",marginTop:"10px",overflow:"hidden"}}>小破站</h5>
      <Button style={{width:"100%",marginTop:"10px"}} variant="contained" onClick={()=> router.push('/')}>首页</Button>
      <Button style={{width:"100%",marginTop:"10px"}} variant="contained" onClick={()=> router.push('./Link')}>链接集合</Button>
      <Button style={{width:"100%",marginTop:"10px"}} variant="contained" onClick={()=> router.push('./Game')}>游戏集合</Button>
      <Button style={{width:"100%",marginTop:"10px"}} variant="contained" onClick={()=> router.push('./Video')}>视频集合</Button>
      <Button style={{width:"100%",marginTop:"10px"}} variant="contained" onClick={()=> router.push('./Music')}>音乐集合</Button>
    </div>
    );
}

export default Navigation;
