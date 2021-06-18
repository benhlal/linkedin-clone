import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import '@material-ui/icons/';
import HeaderOption from "./headerOption/HeaderOption";
import {BusinessCenter} from "@material-ui/icons";
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/userSlice";
import {auth} from "../../firebase";

function Header() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const signMeOut = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder={'Search'}/>
                </div>

            </div>
            {!user ? (
                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title={'Home'}/>
                    <HeaderOption avatar={'r'} title={'Sign In'}/>
                </div>
            ) : (<div className="header__right">
                <HeaderOption Icon={HomeIcon} title={'Home'}/>
                <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'}/>
                <HeaderOption Icon={BusinessCenter} title={'Jobs'}/>
                <HeaderOption Icon={ChatIcon} title={'Messaging'}/>
                <HeaderOption Icon={NotificationsIcon} title={'Notifications'}/>
                <HeaderOption avatar={true} title={'Me'} onClick={signMeOut}/>
            </div>)}

        </div>
    );
}

export default Header;