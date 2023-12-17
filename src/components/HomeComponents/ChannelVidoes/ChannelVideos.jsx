import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { timeAgo } from "../../../assets/functions";
import useFetch from "../../../hooks/useFetch";
import "./ChannelVideos.scss"
import chanelAvatar from "../../../assets/images/chanelAvatar.jpg"
const ChannelVideos = () => {

    const channelId = "UCBVjMGOIkavEAhyqpxJ73Dw";
    const playlistVideos = useFetch("", channelId);

    // Time
    let date = new Date();
    let m = date.getMinutes();
    let s = date.getSeconds()

  return (
    <div className="channelvideos">
        <NavLink className="playlist-user">
      <img src={chanelAvatar} width={50} alt="person one" />
      <h3>Maroon 5</h3>
    </NavLink>
         <ul className="playlist-list">
      {playlistVideos.map((playlist, index) => (

        <li className="playlist-item" key={index}>
          <NavLink to={`/video/${playlist.id.videoId}`} className="playlist-item__link">
          <div className="playlist__item-video-area">
                <img className="playlist__item-video-img" src={playlist.snippet.thumbnails.high.url} alt={playlist.snippet.title.slice(0, 10)} width={250} height={150} />

                <span className="playlist__item-video-time">
                  {m}:{s}
                </span>
            </div>

            <div className="playlist-body">
                <h2 className="playlist__item-heading">{playlist.snippet.title.slice(0, 45)}{playlist.snippet.title.length > 45 ? '...' : ''}</h2>


                <div className="playlist__item-area">
                    <ul className="playlist__item-list">
                        <li className="playlist__item-views">
                            12k views
                        </li>

                        <li className="playlist__item-views">
                        ·
                        </li>

                        <li className="playlist__item-views">
                        {timeAgo(playlist.snippet.publishedAt)}
                        </li>
                    </ul>

                    <span className="playlist__item-name">{playlist.snippet.channelTitle.slice(0, 10)}{playlist.snippet.channelTitle.length > 10 ? '' : ''}</span>

                </div>
            </div>
          </NavLink>
        </li>
        
      ))}
    </ul>
    </div>
  )
}

export default ChannelVideos