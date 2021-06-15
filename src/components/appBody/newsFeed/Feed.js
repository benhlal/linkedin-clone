import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./inputOption/InputOption";
import {CalendarViewDayOutlined, ImageOutlined, SubscriptionsOutlined} from "@material-ui/icons";
import colors from '../../../../src/configs/colors.json'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ImageIcon from '@material-ui/icons/Image';
import Post from "./posts/Post";

function Feed(props) {

    const colorObject = colors.postsIconsColors;
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type={'text'}/>
                        <button type={'submit'}>Send</button>
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
            <Post
                name={'BENHLAL Youness'}
                description={'this is a description'}
                message={'wow this is working'}
                photoUrl={''}
            />

        </div>
    );
}

export default Feed;