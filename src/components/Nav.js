import React from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import './Nav.css';

function Nav(props) {
    return (
       <div className="Nav">
           <div>
               <NavLink exact activeClassName="active" to="/">Home</NavLink>
               <NavLink exact activeClassName="active" to="/main">Main</NavLink>
               <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
               <NavLink exact activeClassName="active" to="/cart">Cart</NavLink>
                    {props.countCartItems ? (
                      <button className="count">
                         {props.countCartItems}
                      </button>
                    ) : (
                     ''
                        )}
                    {' '}
                 
                <Link class="nav-link" to="/signin">Sign in</Link>  
           </div>
       </div>
    );
}

export default withRouter(Nav);
