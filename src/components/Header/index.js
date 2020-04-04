import React from 'react';
import './style.css'

function Header(props) {
    return (
        <div>
           <header className = "header">
               <nav className="headerMenu">
                   <a href="/home">Home</a>
                   <a href="#">About Us</a>
                   <a href="#">Contact Us</a>
               </nav>
               <div>Social Media Links</div>
         </header> 
        </div>
    );
}

export default Header;