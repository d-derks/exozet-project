import React from 'react';
import BtnDefault from '../Buttons';
import './form.scss';

export default function Form() {

    return(
        <form action="" className="b-form">
            <fieldset className="form-inner">
                <legend className="form-title">
                    Fill in your name and address details
                </legend>
                <div className="form-leadin">
                    <p className="form-leadin-text">
                        Fehler mit einem <b className="form-notion">*</b> sind Plichtfehlder
                    </p>
                    <p
                        className="form-leading-errormessage"
                        id="error-message-name"
                    >
                        Fehlermeldung
                    </p>
                </div>
                <div className="form-row">
                    <div className="b-formfield">
                        <label
                            htmlFor="formName"
                            className="formfield-label"
                        >
                            Name
                            <dfn
                                className="form-notion"
                                title="Ist ein Pflichtfeld"
                            >
                                *
                            </dfn>
                        </label>
                        <div className="formfield-box is-error">
                            <input
                                type="text"
                                className="form-input"
                                required="true"
                                aria-labelledby="error-message-name"
                                id="formName"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="b-formfield">
                        <label
                            htmlFor="formEmail"
                            className="formfield-label"
                        >
                            E-Mail
                            <dfn
                                className="form-notion"
                                title="Ist ein Pflichtfeld"
                            >
                                *
                            </dfn>
                        </label>
                        <div className="formfield-box">
                            <input
                                type="email"
                                className="form-input"
                                required="true"
                                id="formEmail"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="b-formfield">
                        <label
                            htmlFor="formPhone"
                            className="formfield-label"
                        >
                            Telefon
                        </label>
                        <div className="formfield-box">
                            <input
                                type="number"
                                className="form-input"
                                id="forPhone"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="b-formfield">
                        <label
                            htmlFor="formComments"
                            className="formfield-label"
                        >
                            Kommentar
                            <dfn
                                className="form-notion"
                                title="Ist ein Pflichtfeld"
                            >
                                *
                            </dfn>
                        </label>
                        <div className="formfield-box">
                            <textarea
                                className="form-textarea"
                                required="true"
                                maxLength="500"
                                rows="5"
                                id="formComments"
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                   <BtnDefault />
                </div>
            </fieldset>
        </form>
    )
};
