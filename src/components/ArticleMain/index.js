import React from 'react';
import './articlemain.scss';
import '../Media/media.scss';
import articleMainImg from '../../assets/media/img-1.jpg';

export default function ArticleMain() {
    return(
        <article className="b-articlemain">
            <header className="articlemain-header">
                <time className="articlemain-header-time" dateTime="2012-12-02 19:02">20.02.2012 | 19:02 Uhr</time>
                <h1 className="articlemain-header-title">Long headlinetext</h1>
            </header>
            <div className="b-richtext">
                <p>
                    Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen ihnen Profi was sie sind. Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele Situationen. Erstens: wir haben nicht offensiv gespielt. Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv wie Bayern.
                </p>
                <p>  Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir müssen nicht vergessen Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese Wörter, ist möglich verstehen, was ich hab gesagt? Danke.
                </p>

                <blockquote>
                    <p>
                        „Ein Trainer ist nicht ein Idiot! Ein Trainer sei sehen was passieren in Platz.“
                        <cite> – Trapattoni ’98</cite>
                    </p>
                </blockquote>
                <p>
                    Offensiv, offensiv ist wie machen wir in Platz. Zweitens: ich habe erklärt mit diese zwei Spieler: nach Dortmund brauchen vielleicht Halbzeit Pause. Ich habe auch andere Mannschaften gesehen in Europa nach diese Mittwoch. Ich habe gesehen auch zwei Tage die Training.
                </p>
                <div className="articlemain-media">
                    <figure className="b-media">
                        <img className="media-img is-framed" src={articleMainImg} alt="placeholder"/>
                        <figcaption className="media-origin">© Lorempixel.com</figcaption>
                    </figure>
                </div>
                <p> Ich habe fertig! . . . wenn es gab Fragen, ich kann Worte wiederholen. . . Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen ihnen Profi was sie sind. Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele Situationen. Erstens: wir haben nicht offensiv gespielt. Es gibt keine <a href="#">deutsche Mannschaft</a> spielt offensiv und die Name offensiv wie Bayern. Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir müssen nicht vergessen Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese Wörter, ist möglich verstehen, was ich hab gesagt? Danke. Offensiv, offensiv ist wie machen wir in Platz. Zweitens: ich habe erklärt mit diese zwei Spieler: nach Dortmund brauchen vielleicht Halbzeit Pause. Ich habe auch andere Mannschaften gesehen in Europa nach diese Mittwoch.
                </p>
            </div>
        </article>
    )
};

