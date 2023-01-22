import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
    <h1>Trabalhando com CSS</h1>
    {/* CSS de Component */}
    <MyComponent/>
    <p>Este parágrafo é do App js</p>
    <p className="my-comp-paragraph">Este tbm é do component</p>
    </div>
  );
}

export default App;
