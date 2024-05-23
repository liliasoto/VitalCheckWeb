import React from 'react';
import '../estilos/AnadirContacto.css'; // Importa los estilos
import formImage from '../Imagenes/contacto.jpg'; // Importa la imagen
import { useNavigate } from 'react-router-dom';

const AnadirContacto: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="add-contact-container">
          <header className="headerr">
            <div className="header-title">Agrega un contacto</div>
            <button className="home-button" onClick={()=>navigate("/")}>Home</button>
          </header>
          
          <div className="content">
            <div className="form-section">
            <h1>Agrega un contacto</h1>
            <h2 className="subtitle">Ya sea a un familiar, amigo o un personal de la salud</h2>
            <form className="contact-form">
                <div className="form-row">
                <div className="form-group half-width">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder='Su nombre' required />
                </div>
                <div className="form-group half-width">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" placeholder='Su apellido' required />
                </div>
                </div>
                <div className="form-group full-width">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder='Su email' required />
                </div>
                <div className="form-group full-width">
                <label htmlFor="rol">Rol</label>
                <select id="rol" name="rol" required>
                    <option value="" disabled selected>Elige una opción</option>
                    <option value="familiar">Familiar</option>
                    <option value="amigo">Amigo</option>
                    <option value="personal">Personal de la salud</option>
                </select>
                </div>
                <button type="submit" className="add-button">Agregar</button>
            </form>
            </div>
            <div className="image-section">
            <img src={formImage} alt="Descripción de la imagen" />
            </div>
        </div>
        </div>
      );    

};

export default AnadirContacto;
