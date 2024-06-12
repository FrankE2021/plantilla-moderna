import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="¿Que ofrecemos?" text="Nuestro trabajo consiste en facilitar a nuestros clientes las mejores oportunidades, siguiendo los estándares de calidad adecuados y buscando siempre la mejor atención, para así trasformarnos en una gran familia" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Confianza,Confort y Seguridad, son nuestras directrices.</h1>
      <p>Nuestras facilidades</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Beneficios" text="En nuestra empresa, brindamos soluciones innovadoras que optimizan la eficiencia operativa y garantizan un crecimiento sostenible para nuestros clientes." />
      <Feature title="100% Seguros" text="Priorizamos la seguridad ofreciendo soluciones avanzadas que protegen los datos y garantizan la integridad operativa de nuestros clientes." />
      <Feature title="Soporte" text="Destacamos por ofrecer un soporte técnico excepcional, asegurando que nuestros clientes reciban asistencia rápida y experta en todo momento." />
    </div>
  </div>
);

export default WhatGPT3;
