import { Search } from "@material-ui/icons";
import { default as React, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./topbar.css";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const LogOut = () => {
  //   history.push("/login");
  //   };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Fakebook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span className="logout">Log Out</span>
          </Link>
        </div>

        {user && (
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : "/assets/person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
