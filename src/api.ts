// src/api.ts
export interface Nivel {
    id: number;
    oxígeno: number;
    pulsoCar: number;
    fecha: string;
    hora: string;
  }
  
  export const fetchNiveles = async (): Promise<Nivel[]> => {
    const response = await fetch('http://localhost:3000/niveles');
    if (!response.ok) {
      throw new Error('Error al obtener los datos de niveles');
    }
    return response.json();
  };
  