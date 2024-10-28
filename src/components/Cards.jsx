import '../Card.css'; // Uncommented to apply styles
import { Avatar } from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';
import { useState } from 'react';

const Cards = () => {
 
  const [team,setTeam]=useState({});

  return (
    <div className="profile-card">
      <div className="profile-picture flex justify-center">
        <Avatar
          alt="Profile Picture"
          src="https://via.placeholder.com/150"
          sx={{ width: 150, height: 150 }}
        />
      </div>
      <div className="profile-description">
        <p>Description or their thoughts go here...</p>
      </div>
      <div className="social-icons">
        <span>socials: →</span>
        <div className="social-links">
          <Instagram />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Cards;
