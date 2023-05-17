import React from "react";
import Logonetflix from "../../Logonetflix.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <nav className="haeder">
      <img src={Logonetflix} alt=""></img>

      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movie">Movies</Link>
        <Link to="/added">Recently Added</Link>
        <Link to="/list">My List</Link>
      </div>
      <BiSearch />
    </nav>
  );
};

export default Header;
