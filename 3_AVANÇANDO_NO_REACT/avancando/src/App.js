import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
function App() {
  const name = "Kaio";
  //const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Bmw", color: "Roxo", newCar: false, km: 120},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ]
  
  function showMessage() {
    console.log("Mensagem da função")
  }

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
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="Teste"/>
      {/* Children */}
      <Container myValue="Teste">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="Teste 2">
        <h5>Testando container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/>
    </div>
  );
}

export default App;
