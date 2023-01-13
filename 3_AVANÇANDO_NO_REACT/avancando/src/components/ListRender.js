import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Kaio", "Pedro", "Matheus"]);
    
    //Simulação banco de dados
    const [users] = useState([
        { id: 1, name: "Kaio", age: 31},
        { id: 23152334, name: "João", age: 28},
        { id: 823741923, name: "Karen", age: 30},
    ]);

    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))};
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))};
        </ul>
    </div>
  )
}

export default ListRender