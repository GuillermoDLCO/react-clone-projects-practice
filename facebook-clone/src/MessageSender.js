import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
    const [{user}, dispatch] = useStateValue()
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://scontent-lim1-1.xx.fbcdn.net/v/t1.0-9/42089544_1890879877667513_4302031129927483392_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeGzG2ON6PRo552qnDMJkqJUaNUqg9gXNZBo1SqD2Bc1kMMOhAjAqffr8FtCS3IpOTcG2brJdZ1GWUy1uzduyfHp&_nc_ohc=fo788i6fCgQAX9LK1Wq&_nc_oc=AQmyd-_lqMvlyaHnjHg30ZC2Ry-gQVFz8uOTcFQ0TYcplQg-9igNcsYFRa_r1VMLGlQIH_Fu9-ZHpw6xtwzsodqL&_nc_ht=scontent-lim1-1.xx&oh=aeb59a8ed8644d8e9c70af856a81d229&oe=5F7CCBE9" />
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input" 
                        placeholder="What's on your mind?" />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)} 
                        placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
