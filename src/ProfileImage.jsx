import React from 'react';
import './ProfileImage.css';
import profileImage from './assets/profile_resized.jpg';

const ProfileImage = () => (
  <div className="profile-image-wrapper">
    <img src={profileImage} alt="Ashish Kumar Thyadi" className="profile-image" />
  </div>
);

export default ProfileImage;
