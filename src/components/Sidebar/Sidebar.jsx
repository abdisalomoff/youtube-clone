import {NavLink} from 'react-router-dom';
import {HomeIcon, Tranding, Subscriptions, Library, History, WatchLater, Favourites, LikedVideos, Music, Games, ShowMore, Settings} from '../../assets/icons';
import "./Sidebar.scss"
import userAvatar from "../../assets/images/userpic.svg"

const Sidebar = ({isSidebarOpen }) => {
      const subscriptionsStyle = {
        display: isSidebarOpen ? 'none' : 'block',
      }

      const sidebarOption = {
        width: isSidebarOpen ? "70px" : ""
      }
    
      const playlistStyle = {
        maxWidth: isSidebarOpen ? '1550px' : 'auto',
      };

  return (
   <div className='sitebar' style={sidebarOption} >
         <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/"}>
                        {HomeIcon}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Home
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/trending"}>
                        {Tranding}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Trending
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/subscriptions"}>
                        {Subscriptions}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Subscriptions
                        </span>
                    </NavLink>
                </li>
            </ul>

            <ul id='nav-list-id' className="nav-list">
                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/library"}>
                        {Library}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Library
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/history"}>
                       {History}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            History
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/watchlater"}>
                        {WatchLater}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Watch later
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/favourites"}>
                        {Favourites}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Favourites
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/likedvideos"}>
                        {LikedVideos}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Liked videos
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/music"}>
                        {Music}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Music
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/games"}>
                        {Games}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Games
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/showmore"}>
                        {ShowMore}

                        <span style={subscriptionsStyle} className="nav-list__item-heading">
                            Show more
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>

        <div id='subscriptions' className='subscriptions' style={subscriptionsStyle}>
            <h2>Subscriptions</h2>
            <ul className="subscriptions-list">
                 <li className="subscriptions-list__item">
                    <NavLink className="subscriptions-list__item-link" to={"/"}>
                        <img className="subscriptions-list__item-img" src={userAvatar} width={26} height={26} />

                        <h3 className="subscriptions-list__item-name">Gussie Singleton</h3>
                    </NavLink>
                </li>
            </ul>
        </div>

        <div className='sidebar-bottom'>
        <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/settings"}>
                        {Settings}

                        <span  style={subscriptionsStyle} className="nav-list__item-heading">
                            Settings
                        </span>
        </NavLink>
        </div>
         
   </div>
  )
}

export default Sidebar