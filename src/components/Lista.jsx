function Lista(){

    const Series = (props)=> {
        return <li>{props.serie}</li>
    }

    const seriesFavoritas = ["Black-Mirror","Rick and Morty","Dark"]
    

    return(
        <main>
        <ol>
            <p>Seja bem vindo a minha lista de Series favoritas</p>
            {seriesFavoritas.map((seriesFavoritas)=> <Series serie = {seriesFavoritas}/>)}
        </ol>
        </main>
    )
}

export default Lista