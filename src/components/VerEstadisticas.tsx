import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../estilos/VerEstadisticas.css';
import { useNavigate } from 'react-router-dom';
import { fetchNiveles } from '../api';

const VerEstadisticas: React.FC = () => {
  const [oxigenoPromedio, setOxigenoPromedio] = useState<number>(0);
  const [pulsoPromedio, setPulsoPromedio] = useState<number>(0);
  const [oxigenoData, setOxigenoData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'Niveles de oxígeno',
        data: [],
        fill: false,
        backgroundColor: 'black',
        borderColor: 'black',
      },
    ],
  });
  const [pulsoData, setPulsoData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'Pulso cardiaco',
        data: [],
        backgroundColor: 'black',
        borderColor: 'black',
      },
    ],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const niveles = await fetchNiveles();
        const oxigenoValores = niveles.map(nivel => nivel.oxígeno);
        const pulsoValores = niveles.map(nivel => nivel.pulsoCar);
        const fechas = niveles.map(nivel => nivel.fecha.split('T')[0]);

        const promedioOxigeno = oxigenoValores.reduce((a, b) => a + b, 0) / oxigenoValores.length;
        const promedioPulso = pulsoValores.reduce((a, b) => a + b, 0) / pulsoValores.length;

        setOxigenoPromedio(promedioOxigeno);
        setPulsoPromedio(promedioPulso);

        setOxigenoData({
          labels: fechas,
          datasets: [
            {
              label: 'Niveles de oxígeno',
              data: oxigenoValores,
              fill: false,
              backgroundColor: 'black',
              borderColor: 'black',
            },
          ],
        });

        setPulsoData({
          labels: fechas,
          datasets: [
            {
              label: 'Pulso cardiaco',
              data: pulsoValores,
              backgroundColor: 'black',
              borderColor: 'black',
            },
          ],
        });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="headerr">
        <div className="header-title">Dashboard</div>
        <button className="home-button" onClick={() => navigate("/")}>Home</button>
      </header>
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-box small-box">
            <h2>Niveles de oxígeno promedio</h2>
            <p className="nivell">{oxigenoPromedio.toFixed(2)}%</p>
            <p className="indicator">
              {oxigenoPromedio <= 85
                ? 'Hipoxia grave'
                : oxigenoPromedio <= 90
                ? 'Hipoxia moderada'
                : oxigenoPromedio <= 94
                ? 'Hipoxia leve'
                : 'Normal'}
            </p>
          </div>
          <div className="dashboard-box small-box">
            <h2>Pulso cardiaco promedio</h2>
            <p className="nivell">{pulsoPromedio.toFixed(2)} lpm</p>
            <p className="indicator">
              {pulsoPromedio >= 86
                ? 'Inadecuado'
                : pulsoPromedio >= 70
                ? 'Normal'
                : pulsoPromedio >= 62
                ? 'Bueno'
                : 'Excelente'}
            </p>
          </div>
          <div className="dashboard-box large-box">
            <h2>Niveles de oxígeno</h2>
            <div className="chart-container">
              <Line data={oxigenoData} />
            </div>
          </div>
          <div className="dashboard-box large-box">
            <h2>Pulso cardiaco</h2>
            <div className="chart-container">
                <Bar data={pulsoData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerEstadisticas;

