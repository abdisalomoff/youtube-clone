import { Route, Routes } from "react-router-dom";
import ChannelVideos from "../../components/HomeComponents/ChannelVidoes/ChannelVideos";
import Playlist from "../../components/HomeComponents/Playlist/Playlist";
import Recommended from "../../components/HomeComponents/Recommended/Recommended";
import "./Home.scss";
import "../../App.css"
import Header from "../../components/Header/Header";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Videos from "../Videos/Videos";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };


  return (
    <div className="home">
        <div className="container">
        <div className="home-inner">
         <Header toggleSidebar={toggleSidebar}/>
        <main className='main-container'>
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <Routes> 

         <Route path="/video/:videoId" element={<Videos  onEnter={() => setIsSidebarOpen(true)}/>}/>

         <Route path="/trending" element={<h2>Trending</h2>}/>

         <Route path="/subscriptions" element={<h2>Subscriptions</h2>}/>

         <Route path="/library" element={<h2>Library</h2>}/>

         <Route path="/history" element={<h2>History</h2>}/>

         <Route path="/watchlater" element={<h2>Watch Later</h2>}/>

         <Route path="/watchlater" element={<h2>Watch Later</h2>}/>

         <Route path="/favourites" element={<h2>Favourites</h2>}/>

         <Route path="/favourites" element={<h2>Favourites</h2>}/>

         <Route path="/likedvideos" element={<h2>Liked Videos</h2>}/>

         <Route path="/music" element={<h2>Music</h2>}/>

         <Route path="/games" element={<h2>Games</h2>}/>

         <Route path="/settings" element={<h2>Settings</h2>}/>

         {/* <Route path="*" element={<h1>Not found 404</h1>}/> */}
       </Routes>
       <section className="container">
          <Playlist/>
          <Recommended/>
          <ChannelVideos/>
       </section>
       </main> 
        </div>
        </div>
    </div>
  );
};

export default Home;