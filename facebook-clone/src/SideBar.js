import React from 'react';
import './SideBar.css';
import SideBarRow from './SideBarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons'
import { useStateValue } from './StateProvider';

function SideBar() {
    const [user, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SideBarRow src="https://scontent-lim1-1.xx.fbcdn.net/v/t1.0-9/42089544_1890879877667513_4302031129927483392_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeGzG2ON6PRo552qnDMJkqJUaNUqg9gXNZBo1SqD2Bc1kMMOhAjAqffr8FtCS3IpOTcG2brJdZ1GWUy1uzduyfHp&_nc_ohc=fo788i6fCgQAX9LK1Wq&_nc_oc=AQmyd-_lqMvlyaHnjHg30ZC2Ry-gQVFz8uOTcFQ0TYcplQg-9igNcsYFRa_r1VMLGlQIH_Fu9-ZHpw6xtwzsodqL&_nc_ht=scontent-lim1-1.xx&oh=aeb59a8ed8644d8e9c70af856a81d229&oe=5F7CCBE9" title="Guillermo DLCO" />
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messenger" />
            <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}


export default SideBar
