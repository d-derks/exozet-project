import React from 'react';
import './brand.scss';
import Logo from '../../assets/media/logo-exozet.png';


export default function Brand() {
    return(
        <div className="b-brand">
            <a
                className="brand-inner"
                href='https://www.exozet.com/de/startpage/'
            >
                <span className="brand-title">Exozet</span>
                <img
                    src={Logo}
                    alt="logo"
                    className="brand-img"
                />
                <svg
                    className="brand-svg"
                    width="40" height="40"
                    viewBox="0 0 40 40"
                >
                    <path fill="#36B6CF" d="M30.526 20l8.843-12.631c1.262-1.685.842-4.211-.843-5.474s-4-.842-5.263.842L21.053 20l12 17.264c1.264 1.684 3.578 2.105 5.264.842 1.895-1.264 2.104-3.789 1.053-5.474L30.526 20"/>
                    <path fill="#E10035" d="M9.474 20L.632 7.369c-1.264-1.685-.842-4.211.842-5.474s4-.842 5.263.842L18.947 20l-12 17.264c-1.263 1.684-3.579 2.105-5.263.842s-2.105-3.789-.842-5.474L9.474 20"/>
                </svg>
            </a>
        </div>
    )
}
