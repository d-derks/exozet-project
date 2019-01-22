import React from 'react';
import './companyinfo.scss';
import Subheader from '../Subheader';
import Article from '../Article';

export default function CompanyInfo() {
    return(
        <div className="b-companyinfo">
            <section className="companyinfo-section">
                <Subheader
                    title="Interne Linkliste"
                    isClasses="is-small"
                />
                <ul className="companyinfo-list">
                    <li className="companyinfo-list-item">
                        <a
                            className="companyinfo-list-item-inner"
                            href="#"
                        >
                            Link Nummer 1
                        </a>
                    </li>
                    <li className="companyinfo-list-item">
                        <a
                            href="#"
                            className="companyinfo-list-item-inner"
                        >
                            Link Nummer 2
                        </a>
                    </li>
                    <li className="companyinfo-list-item">
                        <a
                            className="companyinfo-list-item-inner"
                            href="#"
                        >
                            Link Nummer 3
                        </a>
                    </li>
                </ul>
            </section>
            <section className="companyinfo-section">
                <Subheader
                    title="Kontakt"
                    isClasses="is-small"
                />
                <div className="companyinfo-textbox">
                    <h4 className="companyinfo-textbox-title">Exozet Berlin GmbH</h4>
                    <p className="companyinfo-textbox-text">
                        <span>Platz der Luftbrücke 4-6</span>
                        <span>12101 Berlin</span>
                    </p>
                    <div className="companyinfo-textbox-wrapper">
                        <svg
                            className="companyinfo-textbox-icon"
                            viewBox="241.006 241.015 30.001 29.995"
                        >
                            <path d="M270.871 264.923l-.148-.449c-.354-1.053-1.513-2.146-2.578-2.438l-3.94-1.076c-1.068-.291-2.595.101-3.375.883l-1.427 1.427a15.131 15.131 0 0 1-10.648-10.649l1.426-1.426c.782-.781 1.174-2.305.883-3.374l-1.076-3.942c-.291-1.067-1.389-2.227-2.438-2.576l-.449-.151c-1.052-.351-2.551.004-3.334.786l-2.133 2.137c-.382.379-.625 1.463-.625 1.467a25.209 25.209 0 0 0 7.374 18.094 25.208 25.208 0 0 0 18.038 7.375c.035 0 1.15-.239 1.532-.618l2.134-2.134c.781-.785 1.136-2.284.784-3.336z"/>
                        </svg>
                        <span>
                            <a
                                className="companyinfo-textbox-link is-colored"
                                href="tel:+4930246560">Tel: +49(0)30 24 65 60-0
                            </a>
                        </span>
                    </div>
                    <div className="companyinfo-textbox-wrapper">
                        <svg
                            className="companyinfo-textbox-icon"
                            viewBox="394.172 243.037 38.656 28.859"
                        >
                            <path d="M413.502 259.114l-19.252-16.077h38.556l-19.304 16.077zm-.003 5.248l-19.327-16.141v23.675h38.656V248.26l-19.329 16.102z"/>
                        </svg>
                        <span>
                            E-Mail:
                            <a href="mailto:info@exozet.com"> info@exozet.com</a>
                        </span>
                    </div>
                </div>
            </section>
            <Article />
        </div>
    )
};
