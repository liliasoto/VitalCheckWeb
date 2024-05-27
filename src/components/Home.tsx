import React from 'react';
import '../estilos/Home.css';
import { useNavigate } from 'react-router-dom';
import salud from '../Imagenes/primera.jpg';

const Home: React.FC = () => {

    const navigate = useNavigate();
  return (
    <div className="home-container">
      <header className="header">
        <div className="app-name">VitalCheck</div>
        <nav className="navigation">
            <button className="nav-button" onClick={()=>navigate("/AnadirContacto")}>
                Añadir contacto
            </button>
            <button className="nav-button" onClick={()=>navigate("/VerEstadisticas")}>
                Ver Estadísticas
            </button>
        </nav>
      </header>
      
      <section className="about-us">
        <div className="about-text">
          <h1>¿Qué es VitalCheck?</h1>
          <h2 className="subtitle">La App para tu seguimiento</h2>
          <p className="description">
            Es una aplicación que te ayudará a llevar el seguimiento de tu estado de salud y poder mejorar, ya sea que tengas alguna enfermedad cardiovascular, seas deportista, mujer embarazada o simplemente quieras llevar un monitoreo de tu estado de salud, VitalCheck te ayudará a mejorar.
          </p>
        </div>
        <div className="about-image">
          <img src={salud} alt="Doctora revisando un corazón" />
        </div>
      </section>
      
      <footer className="footer">
        VitalCheck
      </footer>
    </div>
  );
};

export default Home;