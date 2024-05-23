import { useNavigate } from "react-router-dom";

function ErrorPage(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Sorry, this page doesn't exist!!</h1>
            <button onClick={()=>navigate("/")}>
                Go to main page
            </button>
        </div>
    );
};

export default ErrorPage;