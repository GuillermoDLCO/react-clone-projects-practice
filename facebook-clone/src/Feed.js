import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://appamatix.com/wp-content/uploads/2016/05/guy-fawkes-442x450.jpg"
                message="wow its works!"
                timestamp="This is a timestamp"
                username="ssssaaa"
                image="https://i.imgflip.com/3pw1vi.jpg"
            />
            <Post 
                image="https://i.pinimg.com/originals/06/52/a3/0652a31ea2cb219526e2ac4d799bf9d5.jpg"
            />
            <Post />
        </div>
    )
}

export default Feed
