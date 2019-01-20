import React from 'react';
import './form.scss';

export default function Form() {
    return(
        <form action="" className="b-form">
            <fieldset className="form-field">
                <legend className="form-title">
                    Fill in your name and address details
                </legend>
                <div className="form-leadin">
                    <p className="form-leadin-text">Fehler mit einem
                        <span className="form-required-symbol"> * </span>
                        sind Plichtfehlder
                    </p>
                    <p className="form-leadin-error">Fehlermeldung</p>
                </div>

                <div className="form-row">
                    <label htmlFor="formName" className="form-label">Name
                        <span className="form-required-symbol">*</span>
                    </label>
                    <input type="text" className="form-input" required="true" id="formName"/>
                </div>
                <div className="form-row">
                    <label htmlFor="formEmail" className="form-label">E-Mail
                        <span className="form-required-symbol">*</span>
                    </label>
                    <input type="text" className="form-input" required="true" id="formEmail"/>
                </div>
                <div className="form-row">
                    <label htmlFor="formPhone" className="form-label">Telefon
                        <span className="form-required-symbol">*</span>
                    </label>
                    <input type="text" className="form-input"id="forPhone"/>
                </div>
                <div className="form-row is-special">
                    <label htmlFor="formComments" className="form-label">Kommentar
                        <span className="form-required-symbol">*</span>
                    </label>
                    <textarea type="text" className="form-input is-special" required="true" id="formComments" />
                </div>
                <div className="form-row">
                    <button className="form-btn" type="submit">Abschicken</button>
                </div>
            </fieldset>
        </form>
    )
};
