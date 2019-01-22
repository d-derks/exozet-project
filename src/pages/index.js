import React from 'react';
import Pageheader from '../components/Pageheader';
import ArticleMain from '../components/ArticleMain';
import Subheader from "../components/Subheader";
import Form from '../components/Form';
import List from '../components/ListSection';
import Pagefooter from '../components/Pagefooter';
import CompanyInfo from '../components/CompanyInfo';
import './page.scss';

export default () => (
    <>
        <div className="page-inner">
            <Pageheader/>
            <div className="page-wrapper is-flexible">
                <main className="page-main">
                    <ArticleMain />
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
                    <CompanyInfo />
                </aside>
            </div>
        </div>
        <Pagefooter />
    </>
);
