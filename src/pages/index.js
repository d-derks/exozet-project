import React from 'react';
import Pageheader from '../components/Pageheader';
import './page.scss';
import Togglebtn from '../components/Togglebtn';

export default () => (
    <div className='l-page'>
        <div className="page-inner">
            <Pageheader/>
            <Togglebtn/>
        </div>
    </div>
)
//
