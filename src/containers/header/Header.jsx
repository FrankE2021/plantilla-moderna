import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">"La IMAGINACIÓN es el arma más poderosa."</h1>
      <p>Nuestro equipo se enfoca en la gestión de remesas, ventas y desarrollo web con precisión y eficacia. Además, ofrecemos servicios de promoción digital para potenciar la visibilidad y el crecimiento empresarial en el ámbito online. Nos comprometemos a brindar soluciones integrales que garanticen el éxito en el entorno digital.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Email" />
        <button type="button">Empieza ya</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Mas de 500 personas ya forman parte de esta comunidad</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
