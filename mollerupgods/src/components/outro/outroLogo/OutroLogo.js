import React from 'react';
import DKLogo from '../../../assets/img/DKLogo.png';
import './outrologo.scss';

const OutroLogo = () => {
    return (
        <div className="logo-container">
            <img src={DKLogo} alt="Danske Konferencecentre.dk" />
            <a href="#">
                <p>Møllerup Gods er autoriseret partner hos Danske Konferencecentre</p>
            </a>
        </div>
    )
}

export default OutroLogo;
