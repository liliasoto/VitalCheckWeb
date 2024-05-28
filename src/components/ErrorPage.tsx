import { useNavigate } from "react-router-dom";
import '../estilos/ErrorPage.css';

function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="error-container">
            <h1>Perdón, esta página no existe :(</h1>
            <button onClick={() => navigate("/")}>
                Ir a home
            </button>
        </div>
    );
};

export default ErrorPage;
