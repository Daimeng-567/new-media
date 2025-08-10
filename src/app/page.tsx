"use client";
import "./globals.css"
import Navigation from './router';

export default function Home() {

  return (
    <div className='main'>
      <Navigation />
      <div className="rt">
        <div className="notic" style={{position:"absolute",bottom:0,width:'100%',textAlign:'center',color:'#7a7979'}}>
          <p>E-mail:wtc3300@gmail.com &nbsp;&nbsp; This website is mainly used for technical learning, all resources are from the Internet, if there is any infringement, please contact the email.</p>
        </div>
      </div>
    </div>
  );
}
