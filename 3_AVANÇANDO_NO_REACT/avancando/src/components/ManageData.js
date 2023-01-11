import {useState} from 'react'
const ManageData = () => {
    let someDate = 10;
    console.log(someDate);

    const [number, setNumber] = useState(15);
    console.log(number);

    return (
        <div>
            <div>
                <p>Valor: {someDate}</p>
                <button onClick={() => (someDate = 15)}>Mudar variavel</button>
            </div>
            <div>Valor: {number}</div>
            <button onClick={() => setNumber(235)}>Mudar o state</button>
        </div>
    )
}

export default ManageData