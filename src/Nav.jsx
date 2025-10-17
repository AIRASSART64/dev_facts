import { Routes, Route, Navigate, Link, NavLink, useParams } from 'react-router-dom';

function Nav() {



    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to="/facts">Facts</NavLink> </li>
                    <li><NavLink to="/facts/new">New Fact</NavLink> </li>
                </ul>
            </nav>   
        
        </>
    )
}

export default Nav