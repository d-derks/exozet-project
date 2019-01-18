import React from 'react';
import './togglebtn.scss';

export default function Togglebtn() {

    return(
        <div className="b-togglebtn">
            <button
                className="togglebtn-btn"
                type="button"
            >
                <span className="togglebtn-inner">toggle button</span>
            </button>

        </div>
    );
}
