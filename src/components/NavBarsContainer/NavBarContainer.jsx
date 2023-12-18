import NavBar from "../NavBar/NavBar";
import  UserChats from '../UserChats/UserChats'
import HamburguerMenuIcon from '../HamburguerMenuIcon/HamburguerMenuIcon'
import { useState } from "react";

const NavBarsContainer = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="navBarsContainer">
        <HamburguerMenuIcon toggleNav={toggleNav} />
        <div className={`containerResponsivesMenus ${showNav ? 'displayBlock' : 'displayNone'}`}>
          <NavBar />
          <UserChats/>
        </div>
      </div>
    </>
  );
};

export default NavBarsContainer;

