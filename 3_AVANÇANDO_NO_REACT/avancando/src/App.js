import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Kaio";

  
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public pode ser acessada diretamente pelo path */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
       {/* Imagens em asset necessita importar como se fosse um componente */}
      <div>
        <img src={City} alt="Cidade cyberpunk" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={name}/> 
      {/* Destructuring */}
      <CarDetails brand="VW" km={10000} color="Azul"/>
    </div>
  );
}

export default App;
