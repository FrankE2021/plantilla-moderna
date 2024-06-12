import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Remesas Internacionales',
    text: 'Nuestros clientes se encuentran en mas de 20 paises y nuestra función es facilitarles el envío de dinero a sus familiares, asi como otros servicios de recargas internacionales y mucho más.',
  },
  {
    title: 'Gestión de Vuelos y Reservas',
    text: 'Ofrecemos dentro de la plataforma la posibilidad de compra de vuelos a cualquier parte del mundo, reservaciones de hoteles, así como la gestión de trámites consulares en los países que abarcamos',
  },
  {
    title: 'Desarrollo Web, y presencia online',
    text: 'Trabajamos activamente en el desarrollo de Páginas Web, y de la identidad Visual de los clientes que contratan nuestros servicios, facilitando el crecimiento exponencial de sus negocios y respectivas ventas',
  },
  {
    title: 'Marketing y Representación Multilingue',
    text: 'Ofrecemos una amplia variedad de servicios de Marketing orientada al crecimiento visual de cada empresa y de la identidad digital de la misma. Se incluye también la capacidad de adaptarnos a clientes de varios idiomas, inglés, portugués y español son los más pedidos.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Estamos radicados principalmente en Cuba, Brazil y España.</h1>
      <p>Solicita contactarnos a traves de canales oficiales</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
