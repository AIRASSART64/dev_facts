import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/facts">Toutes les anecdotes</NavLink>
        </li>
        <li>
          <NavLink to="/facts/new">Nouvelle anecdote</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;