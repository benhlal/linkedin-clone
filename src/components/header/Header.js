import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import '@material-ui/icons/';
import HeaderOption from "./headerOption/HeaderOption";
import {BusinessCenter} from "@material-ui/icons";
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from "@material-ui/core";

function Header(props) {
    const avatarLink = 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/103964021_10223329677177030_1453090128305957365_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=t27KWISsbkIAX8e73Wn&tn=8lxvfB-WefeMGMBZ&_nc_ht=scontent-cdg2-1.xx&oh=acef5eb1c618e7bd32be3ca1b872129f&oe=60CD460B'
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title={'Home'}/>
                <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'}/>
                <HeaderOption Icon={BusinessCenter} title={'Jobs'}/>
                <HeaderOption Icon={ChatIcon} title={'Messaging'}/>
                <HeaderOption Icon={NotificationsIcon} title={'Notifications'}/>
                <HeaderOption avatar={avatarLink} title={'Me'}/>
            </div>
        </div>
    );
}

export default Header;