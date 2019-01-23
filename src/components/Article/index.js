import React from 'react';
import Subheader from '../Subheader';
import './article.scss';


export default function Article() {
    return (
        <article className="b-article">
            <Subheader
                title="Image Teaser"
                isClasses="is-small"
            />
            <div className="article-inner">
                <div className="article-media">
                    <div className="b-media">
                        <img
                            src="https://www.exozet.com/wp-content/uploads/2018/09/Exozet_concertVR_01.jpg"
                            alt="placeholder"
                            className="media-img"
                        />
                    </div>
                </div>
                <div className="article-textbox">
                    <p className="article-textbox-text">Es gibt im Moment in diese Manschaft , oh einige Spieler</p>
                    <a
                        className="article-textbox-link"
                        href="#"
                    >
                        Mehr lesen
                    </a>
                </div>
            </div>
        </article>
    )
};
