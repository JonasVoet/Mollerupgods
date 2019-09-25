import React from 'react';
import './form.scss';

const Form = () => {
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        return null;
    }
    return (
        <div className="form">
            <h3>Tilmeld nyhedsbrev</h3>
            <form onSubmit={handleSubmit}>
                <label className="email">Email adresse
                <input className="input-field" type="text" />
                </label>

                <label className="name">
                    Navn
                    <input className="input-field" type="text" />
                </label>

                <label className="lastname">
                    Efternavn
                    <input className="input-field" type="text" />
                </label>
                <div className="check-boxes">
                    <ul>
                        <p className="text-info"><strong>Vælg nyhedsbrev</strong></p>
                        <li>

                            <input type="checkbox" />
                            <label>Møllerup - alle</label>
                        </li>

                        <li>
                            <input type="checkbox" />
                            <label>Verdensballetten</label>
                        </li>

                        <li>
                            <input type="checkbox" />
                            <label>Møllerup Hamp</label>
                        </li>
                    </ul>
                </div>
                <input type="submit" value="Tilmeld" className="button" />

            </form>
        </div>
    )
}

export default Form
