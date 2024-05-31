import React, { useState } from 'react';
import '../estilos/AnadirContacto.css';
import formImage from '../Imagenes/contacto.jpg';
import { useNavigate } from 'react-router-dom';

interface Contact {
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
}


const addContactToApi = async (contact: Contact): Promise<string> => {
  try {
    const response = await fetch('http://localhost:3000/contactos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      throw new Error('Error al agregar el contacto');
    }

    const data = await response.json();
    return `Contacto agregado exitosamente con ID: ${data.id}`;
  } catch (error) {
    console.error('Error en addContactToApi:', error);
    return 'Hubo un problema al agregar el contacto. Inténtalo de nuevo.';
  }
};


const AnadirContacto: React.FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    nombre: '',
    apellido: '',
    email: '',
    rol: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('Form submitted with state:', formState);

    // Validar que todos los campos estén llenos
    const { nombre, apellido, email, rol } = formState;
    if (!nombre || !apellido || !email || !rol) {
      setError('Por favor, completa todos los campos.');
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar el formato del correo electrónico
    if (!isValidEmail(email)) {
      setError('Por favor, introduce un formato de correo electrónico válido.');
      alert('Por favor, introduce un formato de correo electrónico válido.');
      return;
    }

    try {
      // Agregar contacto
      //const result = await addContact(formState);
        const result = await addContactToApi(formState);
        alert(result);
        setError('');
        alert('Contacto agregado exitosamente');
        setFormState({
          nombre: '',
          apellido: '',
          email: '',
          rol: ''
        });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Hubo un problema al agregar el contacto. Inténtalo de nuevo.');
      alert('Hubo un problema al agregar el contacto. Inténtalo de nuevo.');
    }
  };
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
                    <input type="text" id="nombre" name="nombre" placeholder='Su nombre' onChange={handleInputChange} required />
                </div>
                <div className="form-group half-width">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" placeholder='Su apellido' onChange={handleInputChange} required />
                </div>
                </div>
                <div className="form-group full-width">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder='Su email' onChange={handleInputChange} required />
                </div>
                <div className="form-group full-width">
                <label htmlFor="rol">Rol</label>
                <select id="rol" name="rol" onChange={handleInputChange} required>
                    <option defaultValue={""} disabled selected>Elige una opción</option>
                    <option value="familiar">Familiar</option>
                    <option value="amigo">Amigo</option>
                    <option value="personal">Personal de la salud</option>
                </select>
                </div>
                <button type="submit" className="add-button" onClick={handleSubmit}>Agregar</button>
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
