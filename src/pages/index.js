import React from 'react';
import Pageheader from '../components/Pageheader';
import './page.scss';
import Togglebtn from '../components/Togglebtn';
import Item from '../components/Item';

export default () => (
    <>
        <div className="page-inner">
            <Pageheader/>
            <Togglebtn/>
            <div className="page-wrapper is-special">
                <main className="page-main">
                    <Item />
                </main>
                <aside className="page-sideinfo">
            </aside>
            </div>
        </div>
        <footer className="page-footer">
            <div className="page-footer-inner">
            </div>
        </footer>
    </>
);
