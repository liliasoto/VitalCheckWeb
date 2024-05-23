import App from "./App";
import AnadirContacto from "./components/AnadirContacto";
import ErrorPage from "./components/ErrorPage";
import VerEstadisticas from "./components/VerEstadisticas";

const routes = [
    {
      path: "",
      element: <App/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "AnadirContacto",
      element: <AnadirContacto/>,
    },
    {
        path: "VerEstadisticas",
        element: <VerEstadisticas/>
    },
  ];

  export default routes;