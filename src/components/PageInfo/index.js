import React from 'react';
import './pageinfo.scss';

export default function PageInfo() {
    return(
        <div className="b-pageinfo">
            <small className="pageinfo-copywright">© Exozet 2014</small>
            <ul className="pageinfo-list">
                <li className="pageinfo-list-item">
                    <a href="#" className="paginfo-list-item-inner">News</a>
                </li>
                <li className="pageinfo-list-item">
                    <a href="#" className="paginfo-list-item-inner">Kontakt</a>
                </li>
                <li className="pageinfo-list-item">
                    <a href="#" className="paginfo-list-item-inner">Impressum</a>
                </li>

            </ul>
        </div>
    )
};



