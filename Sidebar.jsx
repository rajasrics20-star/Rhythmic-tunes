import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { FaHome, FaHeart, FaSearch, FaMusic, FaLine, FaPlayCircle, FaList, FaSignOutAlt, FaSignInAlt, FaSign } from 'react-icons/fa';
import './sidebar.css'

const Sidebar = () => {
           
  return (
    <nav className="sidebar">
      <ul className="list-unstyled">
        <strong style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>Music-Player</strong>
       <div style={{marginTop:"35px"}}>
        
       <li>
          <Link to="/songs">
          <p style={{paddingLeft:"10px"}}> <FaHome /> </p> <p style={{paddingLeft:"10px"}}>Home</p>
          </Link>
        </li>
        </div>
        <hr/>
       <div>
       <p style={{display:"flex",justifyContent:"center"}}> Your Library</p>
        <li>
          <Link to="/favorities">
          <p style={{paddingLeft:"10px"}}> <FaHeart /> </p> <p style={{paddingLeft:"10px"}}>Favorites</p>
          </Link>
        </li>
        <li>
          <Link to="/playlist">
           <p style={{paddingLeft:"10px"}}> <FaList /> </p> <p style={{paddingLeft:"10px"}}>PlayList</p>
          </Link>
        </li>
        <div class="vl"></div>
        
        </div>
       
      </ul>
      {/* <div class="vl"></div> */}
    </nav>
  );
};

export default Sidebar;
