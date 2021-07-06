import { Nav } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import './Navbar.css'

export function Navbar(){

    function addAnimatedClass(e){
        
        e.target.className += " animated";
        console.log(e.target);
    } 
    function removeAnimatedClass(e){
        e.target.className = e.target.className.replace(" animated", "");
    }

    return(
        <Nav className="bg-light d-flex justify-content-around py-3">
            <Nav.Item>
                <Link onMouseEnter= {addAnimatedClass} onMouseLeave={removeAnimatedClass} className="link-navbar" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link onMouseEnter= {addAnimatedClass} onMouseLeave={removeAnimatedClass} className="link-navbar" to="/listado">Películas</Link>
            </Nav.Item>
            <Nav.Item>
                <Link onMouseEnter= {addAnimatedClass} onMouseLeave={removeAnimatedClass} className="link-navbar" to="/contacto">Contacto</Link>
            </Nav.Item>
            <Nav.Item>
                <Link onMouseEnter= {addAnimatedClass} onMouseLeave={removeAnimatedClass} className="link-navbar" to="/admin">Admin</Link>
            </Nav.Item>
        </Nav>
    );
}