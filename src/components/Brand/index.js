import React from 'react';
import './brand.scss';
import Logo from '../../assets/media/logo-exozet.png';


export default function Brand() {
    return(
        <div className='b-brand'>
            <a className="brand-inner" href='https://www.exozet.com/de/startpage/'>
                <span className='brand-title'>Exozet</span>
                <img src={Logo} alt="logo" className="brand-logo"/>
            </a>
        </div>
    )
}
