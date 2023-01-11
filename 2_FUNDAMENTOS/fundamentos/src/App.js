// components
import FirstComponent from './components/FirstComponents';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

// Styless / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent/>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <Events/>
    </div>
  );
}

export default App;
