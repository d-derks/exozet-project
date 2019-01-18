import React from 'react';
import './mainnav.scss';


export default function Mainnav () {
    return (
        <nav className="b-mainnav">
            <ul className="mainnav-list">
                <li className="mainnav-item">
                    <a className="mainnav-item-link" href="">
                        <span className="mainnav-item-text">News</span>
                    </a>
                </li>
                <li className="mainnav-item">
                    <a className="mainnav-item-link" href="">
                        <span className="mainnav-item-text">Kontact</span>
                    </a>
                </li>
                <li className="mainnav-item">
                    <a className="mainnav-item-link" href="">
                        <span className="mainnav-item-text">Impressum</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
