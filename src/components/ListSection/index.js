import React from 'react';
import './listsection.scss';


export default function ListSection () {
    return (
        <section className="b-listsection">
            <ol className="listsection-list">
                <li className="listsection-list-item">Lorem</li>
                <li className="listsection-list-item">Ipsum</li>
                <li className="listsection-list-item">Dolor</li>
                <li className="listsection-list-item">Sit</li>
            </ol>
            <ul className="listsection-list">
                <li className="listsection-list-item is-no-marker">Exozet: GmbH</li>
                <li className="listsection-list-item is-no-marker">Mitarbeiter: ca. 150</li>
                <li className="listsection-list-item is-no-marker">Groups: Games, Interact, Effects</li>
                <li className="listsection-list-item is-no-marker">Gründung 1996</li>
            </ul>
        </section>
    )
};
