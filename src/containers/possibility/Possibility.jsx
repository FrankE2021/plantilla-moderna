import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicita nuestros servicios</h4>
      <h1 className="gradient__text">Amplia variedad <br /> de pagos en diversas plataformas</h1>
      <p>Aceptamos pagos a nivel mundial, desde cuentas bancarias internacionales o locales, hasta cryptomonedas.</p>
      <h4>Las posibilidades están más allá de tú imaginación</h4>
    </div>
  </div>
);

export default Possibility;
