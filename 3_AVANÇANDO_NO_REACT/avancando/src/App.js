import './App.css';

import City from './assets/city.jpg';

function App() {
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
    </div>
  );
}

export default App;
