import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/signIn">SignIn</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;