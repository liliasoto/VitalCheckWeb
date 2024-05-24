import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../estilos/VerEstadisticas.css';
import { useNavigate } from 'react-router-dom';

const VerEstadisticas: React.FC = () => {
  const oxigenoPromedio = 92; // Valor temporal
  const pulsoPromedio = 69; // Valor temporal

  const oxigenoData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Niveles de oxígeno',
        data: [95, 96, 93, 92, 94, 91, 90],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  const pulsoData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Pulso cardiaco',
        data: [70, 72, 69, 68, 71, 67, 66],
        backgroundColor: 'green',
        borderColor: 'green',
      },
    ],
  };

  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="headerr">
        <div className="header-title">Dashboard</div>
        <button className="home-button" onClick={()=>navigate("/")}>Home</button>
      </header>
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-box small-box">
            <h2>Niveles de oxígeno promedio</h2>
            <p>{oxigenoPromedio}%</p>
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
            <p>{pulsoPromedio} lpm</p>
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
            <h2 className="titulo-cuadro-abajo">Niveles de oxígeno</h2>
            <div className="chart-container">
              <Line data={oxigenoData} />
            </div>
          </div>
          <div className="dashboard-box large-box">
            <h2 className="titulo-cuadro-abajo">Pulso cardiaco</h2>
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
