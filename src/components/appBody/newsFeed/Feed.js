import React, {useEffect, useState} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./inputOption/InputOption";
import {CalendarViewDayOutlined, SubscriptionsOutlined} from "@material-ui/icons";
import colors from '../../../../src/configs/colors.json'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ImageIcon from '@material-ui/icons/Image';
import Post from "./posts/Post";
import {db} from "../../../firebase";
import firebase from "firebase";


function Feed(props) {

    const colorObject = colors.postsIconsColors;
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection("posts").orderBy('timeStamp', 'desc').onSnapshot(
            snapshot => (
                setPosts(snapshot.docs.map(
                    (doc) => (
                        {
                            id: doc.id,
                            data: doc.data(),
                        }
                    )
                ))
            ))

    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add(
            {
                name: 'BENHLAL Yassine',
                description: 'This is a clone',
                message: input,
                photoUrl: '',
                timeStamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        ).then(r => (''))
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type={'text'} onChange={event => setInput(event.target.value)}/>
                        <button type={'submit'} onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title={'Photo'} color={colorObject.blueLight}/>
                    <InputOption Icon={SubscriptionsIcon} title={'Video'} color={colorObject.orange}/>
                    <InputOption Icon={SubscriptionsOutlined} title={'Event'} color={colorObject.greyLight}/>
                    <InputOption Icon={CalendarViewDayOutlined} title={'Write article'} color={colorObject.greenLight}/>
                </div>
            </div>

            {/* POSTS*/}
            {
                posts.map(
                    ({
                         id, data:
                            {
                                name,
                                description,
                                message,
                                photoUrl
                            }
                     }) => (<Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />))
            }


        </div>
    );
}

export default Feed;