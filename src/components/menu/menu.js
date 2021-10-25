import { useState } from "react";
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import './styles.css';

function Menu() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="menu-container">
        <nav className="menu-bar">
          <Link to='/'>Roberto</Link>

          <div className={toggle ? "menu-buttons show" : "menu-buttons hide"}>
            <Link to='/' >
              <span className="text-button active">Inicio</span>
            </Link>
            <Link to='/'>
              <span className="text-button">Sobre mi</span>
            </Link>
            <Link to='/'>
              <span className="text-button">Habilidades</span>
              </Link>
            <Link to='/'>
              <span className="text-button">Trabajos</span>
            </Link>
            <Link to='/'>
              <span className="text-button">Contacto</span>
            </Link>
          </div>

          <FiMenu className="hamburguer" onClick={() => setToggle(!toggle)}/>
        </nav>
    </header>
  );
}

export default Menu;
