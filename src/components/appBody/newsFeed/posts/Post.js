import React from 'react';
import './Post.css'
import {Avatar} from "@material-ui/core";
import InputOption from "../inputOption/InputOption";
import {CommentOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import colors from '../../../../../src/configs/colors.json'

function Post({name, description, message, photoUrl}) {


    return (
        <div className={'post'}>

            <div className={'post__header'}>
                <Avatar/>
                <div className={'post__info'}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className={'post__body'}>
                <p>{message}</p>
            </div>


            <div className={'post__buttons'}>
                <InputOption Icon={ThumbUpAltOutlined} title={'Like'} color={colors.postsIconsColors.gray}/>
                <InputOption Icon={CommentOutlined} title={'Comment'} color={colors.postsIconsColors.gray}/>
                <InputOption Icon={ShareOutlined} title={'Share'} color={colors.postsIconsColors.gray}/>
                <InputOption Icon={SendOutlined} title={'Send'} color={colors.postsIconsColors.gray}/>
            </div>


        </div>
    );
}

export default Post;