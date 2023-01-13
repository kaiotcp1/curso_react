import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Kaio", "Pedro", "Matheus"]);
    
    //Simulação banco de dados
    const [users, setUsers] = useState([
        { id: 1, name: "Kaio", age: 31},
        { id: 2, name: "João", age: 28},
        { id: 3, name: "Karen", age: 30},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((users) => randomNumber !== users.id)
        });
    }

    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender