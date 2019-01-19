import React from 'react';
import Pageheader from '../components/Pageheader';
import './page.scss';
import Togglebtn from '../components/Togglebtn';

export default () => (
    <>
        <div className="page-inner">
            <Pageheader/>
            <Togglebtn/>
            <main className="page-main">
                <div className="page-main-inner">
                </div>
            </main>
            <aside className="page-sideinfo">
            </aside>
        </div>
        <footer className="page-footer">
            <div className="page-footer-inner">
            </div>
        </footer>
    </>
);
