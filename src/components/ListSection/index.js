import React from 'react';
import './listsection.scss';


export default function ListSection () {
    return (
        <section className="b-listsection">
            <ol className="listsection-list">
                <li className="listsection-list-item is-marker">Lorem</li>
                <li className="listsection-list-item is-marker">Ipsum</li>
                <li className="listsection-list-item is-marker">Dolor</li>
                <li className="listsection-list-item is-marker">Sit</li>
            </ol>
            <ul className="listsection-list">
                <li className="listsection-list-item">Exozet: GmbH</li>
                <li className="listsection-list-item">Mitarbeiter: ca. 150</li>
                <li className="listsection-list-item">Groups: Games, Interact, Effects</li>
                <li className="listsection-list-item">Gründung 1996</li>
            </ul>
        </section>
    )
};
