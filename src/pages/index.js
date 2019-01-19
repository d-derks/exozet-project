import React from 'react';
import Pageheader from '../components/Pageheader';
import './page.scss';
import Togglebtn from '../components/Togglebtn';

export default () => (
    <React.Fragment>
        <div className='l-page'>
        <div className="page-wrapper">
            <Pageheader/>
            <Togglebtn/>
            <div className="page-inner">
                <main className="page-main">
                    <div className="page-main-inner">
                    </div>
                </main>
                <aside className="page-sideinfo">
                </aside>
            </div>
        </div>
        <footer className="page-footer">
        </footer>
        </div>
    </React.Fragment>
)
//
