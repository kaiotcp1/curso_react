import { useState } from "react"


const ConditionalRender = () => {
    const [x] = useState(false)

    const [name] = useState("João")


    return (
        <div>
            <h1>isso será exibido?</h1>
            {x && <p>se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            {name === "João" ? (

                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender