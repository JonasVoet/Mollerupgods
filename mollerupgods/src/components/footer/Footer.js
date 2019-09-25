import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="first">
                <li>Møllerup Gods</li>
                <li>Møllerupvej 26</li>
                <li>8410 Rønde</li>
            </ul>

            <ul className="second">
                <li>Telefon 87 58 69 00</li>
                <a href="/"><li>info@moellerup.dk</li></a>
            </ul>

            <ul className="third">
                <li>Tekst <a href="/">Lone Rubin</a></li>
            </ul>
        </footer>
    )
}

export default Footer
