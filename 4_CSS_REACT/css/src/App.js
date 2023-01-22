import './App.css';
import MyComponent from './components/MyComponent';

function App() {

  const n = 15;

  return (
    <div className="App">
      {/* CSS Global */}
    <h1>Trabalhando com CSS</h1>
    {/* CSS de Component */}
    <MyComponent/>
    <p>Este parágrafo é do App js</p>
    <p className="my-comp-paragraph">Este tbm é do component</p>
    {/* Inline CSS */}
    <p style={{color: "red", borderTop: "2px solid red", padding: "25px"}}>Este elemento foi estilizado de forma inline</p>
    {/* CSS inline dinâmico */}
    <h2 style={n > 10 ? ({color: "purple"}) : ({color: "green"})}>Css Inline dinâmico</h2>
    </div>
  );
}

export default App;
