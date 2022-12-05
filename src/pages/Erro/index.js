import { Link } from "react-router-dom";
import './erro.css'

function Erro(params) {
    return(
        <div className="notFound">
            <h1>ERRO 404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Veja todos filmes!</Link>
        </div>
    )
}

export default Erro;