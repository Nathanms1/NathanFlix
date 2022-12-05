import './favoritos.css'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Favoritos(params) {
    
    const [filmes, setFilmes] = useState([])

    useEffect (() => {

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id) {
        
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id) }>Excluir da lista</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Favoritos;