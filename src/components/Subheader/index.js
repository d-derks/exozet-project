import React from 'react';
import classNames from 'classnames';
import './subheader.scss';

export default function Subheader(props) {
    const { isClasses, title } = props;
    const subheader =  classNames('b-subheader', isClasses);
    const subheaderTitle =  classNames('subheader-title', isClasses);

    return(
        <div className={subheader}>
            <h2 className={subheaderTitle}>
                {title}
            </h2>
        </div>
    )
}
