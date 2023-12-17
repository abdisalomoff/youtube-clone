import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (searchQuery, channelId, videoId) => {
  const [playlistVideos, setPlaylistVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: searchQuery,
          channelId: channelId,
          id: videoId,
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '50',
          order: 'date'
        },
        headers: {
          'X-RapidAPI-Key': '8e76f9c374msh24ae6856e431efap1014ddjsn525967a8037a',
        //   'X-RapidAPI-Key': '35bad89a17msh6849503e3b74392p15d919jsn8db83a46e557',

          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setPlaylistVideos(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchQuery, channelId, videoId]);

  return playlistVideos;
};

export default useFetch;
