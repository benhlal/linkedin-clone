import InfoIcon from "@material-ui/icons/Info";
import './Widget.css'
import React from "react";
import {FiberManualRecord} from "@material-ui/icons";

function Widget() {

    const newsArticle = (heading, subtitle) =>
        (<div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    return (
        <div className={'widget'}>
            <div className={'widget__header'}>
                <h2> LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle('Youness is Back', 'Top news - 989 readers')}
            {newsArticle('Tesla hits new highs', 'Cars & auto- 15 readers')}
            {newsArticle('Bitcoin is freefall', 'Crypto - 850 readers')}
            {newsArticle('Redux Vs ContextAPI', 'Coding- 44 readers')}
            {newsArticle('PMP Examination Updates', 'Certifications - 333 readers')}

        </div>
    );
}

export default Widget;