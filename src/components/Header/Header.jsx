import "./Header.scss"
import { Hamburger, Youtube, VideoIcon, Menu, Notification, HomeIcon } from '../../assets/icons';
import { Link } from "react-router-dom";

import userAvatar from "../../assets/images/userpic.svg"
import Search from "./Search";
import useFetch from "../../hooks/useFetch";

const Header = ({toggleSidebar, handleSearch }) => {
    const { loading } = useFetch();
    return (
        <header>
            <div className="header-container">
                <div>
                    <button onClick={toggleSidebar} className="hamburger">{Hamburger}</button>
                    <Link className="youtube-logo" to={"/"}>{Youtube}</Link>
                </div>

                <Search handleSearch={handleSearch} useFetch={useFetch}/>

                <div className="profile-container">
                    <Link className="material-symbols-rounded">{VideoIcon}</Link>
                    <Link className="material-symbols-rounded">{Menu}</Link>
                    <Link
                        className="material-symbols-rounded"
                    >
                        <div className="notifications-count">{Notification}</div>
                    </Link>
                    <Link><img src={userAvatar} alt="Avatar Logo" title="Avatar" /></Link>
                </div>

            </div>
            {loading && <div className="liener"></div>}
        </header>
    )
}

export default Header