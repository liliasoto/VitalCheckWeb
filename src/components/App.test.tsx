import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import AnadirContacto from './AnadirContacto';
import ErrorPage from './ErrorPage';
import VerEstadisticas from './VerEstadisticas';

describe('Home Component', () => {
  it('renders the Home component', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });
});

describe('AnadirContacto Component', () => {
  it('renders the AnadirContacto component', () => {
    render(
      <Router>
        <AnadirContacto />
      </Router>
    );
  });
});

describe('ErrorPage Component', () => {
  it('renders the ErrorPage component', () => {
    render(
      <Router>
        <ErrorPage />
      </Router>
    );
  });
});

describe('VerEstadisticas Component', () => {
  it('renders the VerEstadisticas component', () => {
    render(
      <Router>
        <VerEstadisticas />
      </Router>
    );
  });
});

describe('AnadirContacto Component', () => {
  it('adds a contact when the "Agregar" button is clicked', async () => {
    // Mockear la función fetch para simular una respuesta exitosa
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: 1 }),
    });
    vi.mock('node-fetch', async () => ({
      default: mockFetch,
    }));

    // Renderizar el componente AnadirContacto dentro de un Router
    render(
      <Router>
        <AnadirContacto />
      </Router>
    );
    
    // Simular la entrada de datos en los campos del formulario
        await screen.findByLabelText('Nombre').then((input) => {
          const inputElement = input as HTMLInputElement;
          inputElement.value = 'Juan';
        });
        await screen.findByLabelText('Apellido').then((input) => {
          const inputElement = input as HTMLInputElement;
          inputElement.value = 'Perez';
        });
        await screen.findByLabelText('Email').then((input) => {
          const inputElement = input as HTMLInputElement;
          inputElement.value = 'juan@example.com';
        });
        await screen.findByLabelText('Rol').then((select) => {
          const selectElement = select as HTMLSelectElement;
          selectElement.value = 'amigo';
        });

    fireEvent.click(screen.getByText('Agregar'));

  });
});
