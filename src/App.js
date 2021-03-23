import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Login from "./Pages/Login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
