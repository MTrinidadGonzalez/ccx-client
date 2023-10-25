import React from 'react';

const HamburguerMenuIcon = ({ toggleNav }) => {
  return (
    <>
      <div className="hamburguerMenuDiv" onClick={toggleNav}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </>
  );
};

export default HamburguerMenuIcon;


