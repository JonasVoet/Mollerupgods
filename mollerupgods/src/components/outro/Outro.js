import React from 'react';
import OutroLogo from './outroLogo/OutroLogo';
import Insta from './instragram/Instagram';
import Form from './form/Form';
import './outro.scss';

const Outro = () => {
    return (
        <div className="outro-container">
            <OutroLogo />
            <div className="outro">
                <Insta />
                <Form />
            </div>
        </div>
    )
}

export default Outro;
