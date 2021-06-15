import React from 'react';
import {Avatar} from "@material-ui/core";
import './SideBar.css'

function SideBar(props) {


    const recentItem = (topic) =>
        (<div className="sideBar__recentItem">
            <span className="sideBar__hashtag">#</span>
            <p>{topic}</p>
        </div>)


    return (
        <div className="sideBar">

            <div className="sideBar__top">

                <img
                    src={"https://media-exp1.licdn.com/dms/image/C5616AQG_eyW-PS4JIA/profile-displaybackgroundimage-shrink_200_800/0/1517486514764?e=1629331200&v=beta&t=Io8xPmy0LLiX9O0fOV8RdqNI2nrSa6HA1tSJI38Aj_c"}
                    alt={""}/>
                <Avatar className="sideBar__avatar"/>
                <h2>BENHLAL Youness</h2>
                <h4>Full-stack Lead and Certified ScrumMaster </h4>
            </div>

            <div className="sideBar__stats">

                <div className="sideBar__stat">
                    <p> Who viewed You</p>
                    <p className="sideBar__statNumber"> 27</p>
                </div>
                <div className="sideBar__stat">
                    <p> Views of your post</p>
                    <p className="sideBar__statNumber"> 368</p>
                </div>
            </div>

            <div className="sideBar__bottom">
                <p>Followed Hashtags</p>
                {recentItem('reactjs')}
                {recentItem('QuantumComputing')}
                {recentItem('DataScience')}
                {recentItem('Developer')}
                {recentItem('PMP ')}
            </div>
        </div>
    );
}

export default SideBar;