import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Like, Dislike, Share, More } from '../../assets/icons';
import "./Videos.scss";
import { formatDate, formatLinkText, formatViewNum} from '../../assets/functions';
import PlaylistList from '../../components/HomeComponents/Playlist/PlaylistList';

const Videos = ({ onEnter }) => {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);

  const [showMore, setShowMore] = useState(false)

  
  useEffect(() => {
    const fetchVideoData = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {
          part: 'contentDetails,snippet,statistics',
          id: videoId
        },
        headers: {
          'X-RapidAPI-Key': '8e76f9c374msh24ae6856e431efap1014ddjsn525967a8037a',
        //   35bad89a17msh6849503e3b74392p15d919jsn8db83a46e557
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setVideoData(response.data.items[0]);
        console.log(response.data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    onEnter && onEnter();
  }, [onEnter]);

  return (
    <div className='videos'>
      <div className='videos-left'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <div className='videos-body'>
          <h1>{videoData?.snippet?.title}</h1>
          <div className='videos-body-results'>
            <p>{formatViewNum(videoData?.statistics?.viewCount)} views</p>
            <ul className='videos-body-buttons'>
              <li> <button>{Like} <p>{videoData?.statistics?.likeCount}</p></button> </li>
              <li> <button>{Dislike} <p>{videoData?.statistics?.commentCount}</p></button> </li>
              <li> <button>{Share} <p>Share</p></button> </li>
              <li> <button style={{ backgroundColor: 'transparent', marginLeft: "30px" }}>{More}</button> </li>
            </ul>
          </div>
        </div>

        <div className='videos-chanel'>
            <img src={videoData?.snippet?.thumbnails?.standard?.url} alt={videoData?.snippet?.title} />
            <div>
                <div><h2>{videoData?.snippet?.channelTitle}</h2> <Link className='videos-chanel-subscribe'>Subscribe 2.3m</Link> </div>
                <p className='videos-pulished'>published add {formatDate(videoData?.snippet?.publishedAt)}</p>
                <div className='videos-description'>
                    { showMore ? `${formatLinkText(videoData?.snippet?.description)}` :  `${formatLinkText(videoData?.snippet?.description.substring(0, 500))}`}
                    <button onClick={()=> setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                </div>
            </div>
        </div>
      </div>

      
      <div className='videos-right'>
        <PlaylistList/>
      </div>
    </div>
  );
};

export default Videos;
