import { NavLink } from "react-router-dom"
import { timeAgo } from "../../../assets/functions";

import useFetch from "../../../hooks/useFetch";
import "../Playlist/Playlist.scss"
import "./Recommended.scss"


const Recommended = () => {

    const playlistVideos = useFetch("cartoon US");
      // Time
      let date = new Date();
      let m = date.getMinutes();
      let s = date.getSeconds()

  return (
    <div className="recommended">
        <h2>Recommended</h2>

        <ul className="playlist-list">
        {playlistVideos.map((playlist, index) => (

        <li className="playlist-item recommended-item" key={index}>
          <NavLink to={`/video/${playlist.id.videoId}`} className="playlist-item__link">
          <div className="playlist__item-video-area">
                <img className="playlist__item-video-img"  style={{width: 540, height: 250}} src={playlist.snippet.thumbnails.high.url} alt={playlist.snippet.title.slice(0, 10)} width={250} height={150} />

                <span className="playlist__item-video-time">
                  {m}:{s}
                </span>
            </div>

            <div className="playlist-body">
                <h2 className="playlist__item-heading">{playlist.snippet.title.slice(0, 60)}{playlist.snippet.title.length > 60 ? '...' : ''}</h2>


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

                    <span className="playlist__item-name">{playlist.snippet.channelTitle.slice(0, 50)}{playlist.snippet.channelTitle.length > 50 ? '' : ''}</span>

                </div>
            </div>
          </NavLink>
        </li>
        
      ))}
    </ul>
    </div>
  )
}

export default Recommended