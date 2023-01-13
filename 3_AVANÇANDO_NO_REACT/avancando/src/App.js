import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Kaio";
  //const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Bmw", color: "Roxo", newCar: false, km: 120},
    {id: 1, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ]
  
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
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km ={0} newCar={true}/>
      {/* Loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km} n
        ewCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
