const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e); //Obter informações do evento
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
        </div>
    )

}
export default Events;