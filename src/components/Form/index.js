import React from 'react';
import BtnDefault from '../Buttons';
import './form.scss';

export default function Form() {
    return(
        <form action="" className="b-form">
            <fieldset className="form-field">
                <legend className="form-title">
                    Fill in your name and address details
                </legend>
                <div className="form-leadin">
                    <p className="form-leadin-text">
                        Fehler mit einem
                        <span className="form-required-symbol">
                            * </span>
                        sind Plichtfehlder
                    </p>
                    <p className="form-leading-errormessage">Fehlermeldung</p>
                </div>
                <div className="form-row">
                    <label htmlFor="formName" className="form-label">
                        Name
                        <dfn className="form-required-symbol" title="Ist ein Pflichtfeld">
                            *
                        </dfn>
                    </label>
                    <div className="form-row-field">
                        <input type="text" className="form-input" required="true" id="formName"/>
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="formEmail" className="form-label">
                        E-Mail
                        <dfn className="form-required-symbol" title="Ist ein Pflichtfeld">
                            *
                        </dfn>
                    </label>
                    <div className="form-row-field">
                        <input type="text" className="form-input" required="true" id="formEmail"/>
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="formPhone" className="form-label">
                        Telefon
                    </label>
                    <div className="form-row-field">
                        <input type="text" className="form-input"id="forPhone"/>
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="formComments" className="form-label">
                        Kommentar
                        <dfn className="form-required-symbol" title="Ist ein Pflichtfeld">
                            *
                        </dfn>
                    </label>
                <div className="form-row-field">
                    <textarea type="text" className="form-textarea" required="true" id="formComments" ></textarea>
                </div>
                </div>
                <div className="form-row">
                   <BtnDefault />
                </div>
            </fieldset>
        </form>
    )
};
