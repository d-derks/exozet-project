import React from 'react';
import Pageheader from '../components/Pageheader';
import Item from '../components/Article';
import Subheader from "../components/Subheader";
import Form from '../components/Form';
import List from '../components/ListSection';
import './page.scss';

export default () => (
    <>
        <div className="page-inner">
            <Pageheader/>
            <div className="page-wrapper is-special">
                <main className="page-main">
                    <Item />
                    <section className="page-section">
                        <Subheader
                            title="Formular"
                        />
                        <Form />
                    </section>
                    <section className="page-section">
                        <Subheader
                            title="Leistungsumfang"
                        />
                        <List />
                    </section>
                </main>
                <aside className="page-sideinfo">
            </aside>
            </div>
        </div>
        <footer className="page-footer">
            <div className="page-footer-inner">
            </div>
        </footer>
    </>
);
