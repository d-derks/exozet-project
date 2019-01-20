import React from 'react';
import Pageheader from '../components/Pageheader';
import './page.scss';
import Togglebtn from '../components/Togglebtn';
import Item from '../components/Item';
import Subheader from "../components/Subheader";
import Form from "../components/Form";

export default () => (
    <>
        <div className="page-inner">
            <Pageheader/>
            <Togglebtn/>
            <div className="page-wrapper is-special">
                <main className="page-main">
                    <Item />
                    <section className="page-section">
                        <Subheader
                            title="Formular"
                        />
                        <Form />
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
