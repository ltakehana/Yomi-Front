<<<<<<< HEAD
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";

function App() {
	return Cadastro();
=======
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
>>>>>>> 9facd59dfd04b01af4897b094350c96fe1248de0
}

export default App;
