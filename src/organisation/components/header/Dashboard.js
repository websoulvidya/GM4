import  React from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
        <Link to="/orghome" ></Link> 
        <Link to="/orghome" >Dashboard</Link> 
        <Link to="/chat">Chat</Link> 
        <Link to="/notifications">Notification</Link> 
        <Link to="/sendidp">Send IDP</Link> 
        <Link to="/slotlist">Slot List</Link>  
        <Link to="/mymatches">My matches</Link> 
        <Link to="/cancellation">Cancellation</Link> 
        <Link to="/Logout">Logout</Link> 

        </>
  );
}