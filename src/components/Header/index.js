import './header.css';
import { Link } from 'react-router-dom';

function Header(params) {
    return(
        <header>
            <Link className="logo" to="/">Nathan Flix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;