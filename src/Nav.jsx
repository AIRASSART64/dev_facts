import { Routes, Route, Navigate, Link, NavLink, useParams } from 'react-router-dom';

function Nav() {



    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Facts</NavLink> </li>
                    <li><NavLink to="/new">New Fact</NavLink> </li>

                </ul>
            </nav>   
        
        </>
    )
}

export default Nav