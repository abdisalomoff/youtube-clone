import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { timeAgo } from "../../../assets/functions";

// import useFetch from "../../../hooks/useFetch";
import userAvatar from "../../../assets/images/userpic.svg"

import "./Playlist.scss"
import PlaylistList from "./PlaylistList";

const Playlist = () => {



  return (
    <section className="playlist"> 
    <NavLink className="playlist-user">
      <img width={50} src={userAvatar} alt="person one" />
      <h3>Gussie Singleton</h3>
    </NavLink>

    <PlaylistList/>
  </section>
  )
}

export default Playlist