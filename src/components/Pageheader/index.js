import React from 'react';
import Brand from '../Brand';
import Mainnav from '../Mainnav';
import './pageheader.scss';

export default function Pageheader() {
    return(
        <header className="b-pageheader">
            <div className="pageheader-inner">
                <Brand />
                <Mainnav />
            </div>
        </header>
    )
}
