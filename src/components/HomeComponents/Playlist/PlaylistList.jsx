import { Link } from "react-router-dom"
import "./Playlist.scss"
import useFetch from "../../../hooks/useFetch";
import { timeAgo } from "../../../assets/functions";

const PlaylistList = ({ playlistStyle }) => {
    const playlistVideos = useFetch("music");

    // Time
    let date = new Date();
    let m = date.getMinutes();
    let s = date.getSeconds()
  return (
    <>
    <ul id="playlist-col" className="playlist-list" style={playlistStyle}>
      {playlistVideos.map((playlist, index) => (

        <li className="playlist-item" key={index}>
          <Link  to={`/video/${playlist.id.videoId}`} className="playlist-item__link">
            <div className="playlist__item-video-area">
                  <img id="playlist__item-video-img-col" className="playlist__item-video-img" src={playlist.snippet.thumbnails.high.url} alt={playlist.snippet.title.slice(0, 10)}  />

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
          </Link>
        </li>
        
      ))}
    </ul></>
  )
}

export default PlaylistList