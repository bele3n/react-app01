import logo from './logo.svg';
import './App.css';
import { C01componente } from './components/C01componente';
import Contador1 from './components/C02componente';
import Contador2 from './components/C03componente';
import Contador3 from './components/C04componente';
import C05operador from './components/C05operadorTemario';
import C06matriz from './components/C06matriz1';

function App() {
  return (
    <div>
      <h1></h1>
      <C01componente/> 
      <hr/>
      <h1>Segundo componente</h1> 
      <Contador1/>
      <hr/>
      <h1>Tercer componente</h1>
      <Contador2/>
      <hr/>
      <h1>Cuarto componente</h1>
      <Contador3/>
      <hr/>
      <h1>Quinto componente</h1>
      <C05operador/>
      <hr/>
      <h1>Sexto componente</h1>
      <C06matriz/>
              
    </div>
  );
}

export default App;
