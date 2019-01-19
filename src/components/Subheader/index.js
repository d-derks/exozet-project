import React from 'react';
import './subheader.scss';

export default function Subheader(props) {
    return(
        <div className="b-subheader">
            <h2 className="subheader-title">
                {props.title}
            </h2>
        </div>
    )
}
