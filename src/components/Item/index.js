import React from 'react';
import './item.scss';
import '../Media/media.scss';
import itemImg from '../../assets/media/img-1.jpg';

export default function Item() {
    return(
        <article className="b-item">
            <header className="item-header">
                <time className="item-header-time" dateTime="2012-12-02 19:02">20.02.2012 | 19:02 Uhr</time>
                <h1 className="item-header-title">Long headlinetext</h1>
            </header>
            <p className="item-text">
                Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen ihnen Profi was sie sind. Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele Situationen. Erstens: wir haben nicht offensiv gespielt. Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv wie Bayern.  Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir müssen nicht vergessen Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese Wörter, ist möglich verstehen, was ich hab gesagt? Danke.
            </p>
            <blockquote className="item-quote">
                <p className="item-quote-text">
                    „Ein Trainer ist nicht ein Idiot! Ein Trainer sei sehen was passieren in Platz.“
                    <cite className="item-quote-author"> – Trapattoni ’98</cite>
                </p>
            </blockquote>
            <p className="item-text">
                Offensiv, offensiv ist wie machen wir in Platz. Zweitens: ich habe erklärt mit diese zwei Spieler: nach Dortmund brauchen vielleicht Halbzeit Pause. Ich habe auch andere Mannschaften gesehen in Europa nach diese Mittwoch. Ich habe gesehen auch zwei Tage die Training.
            </p>
            <div className="item-media">
                <figure className="b-media">
                    <img className="media-img is-framed" src={itemImg} alt="placeholder image"/>
                    <figcaption className="media-origin">© Lorempixel.com</figcaption>
                </figure>
            </div>
            <p className="item-text"> Ich habe fertig! . . . wenn es gab Fragen, ich kann Worte wiederholen. . . Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen ihnen Profi was sie sind. Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele Situationen. Erstens: wir haben nicht offensiv gespielt. Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv wie Bayern. Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir müssen nicht vergessen Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese Wörter, ist möglich verstehen, was ich hab gesagt? Danke. Offensiv, offensiv ist wie machen wir in Platz. Zweitens: ich habe erklärt mit diese zwei Spieler: nach Dortmund brauchen vielleicht Halbzeit Pause. Ich habe auch andere Mannschaften gesehen in Europa nach diese Mittwoch.
            </p>
        </article>
    )
};
