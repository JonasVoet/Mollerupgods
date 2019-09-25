import React from 'react';
import Gods from '../../assets/img/godset.png';
import '../contact/contact.scss'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Her finder du Møllerup Gods...</h1>
            <img src={Gods} alt="Godset" />

            <h2>Adresse</h2>
            <p>Møllerup Gods, Møllerupvej 26, 8410 Rønde</p>

            <h2>Telefon</h2>
            <p>87586900</p>

            <h2>E-mail</h2>
            <p>info@moellerup.dk</p>

        </div>
    )
}

export default Contact;
