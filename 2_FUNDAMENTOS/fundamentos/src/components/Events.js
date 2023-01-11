const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e); //Obter informações do evento
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!!")}>Click que aqui também</button>
            </div>
            <button onClick={() => {
                if(true) {
                    console.log("isso não deveria existir =>")
                }
            }}>Clique aqui 2</button>
        </div>
    )

}
export default Events;