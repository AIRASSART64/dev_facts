import Nav from "./Nav"
import { Link } from "react-router-dom"


function Header() {

    return(

        <>
     <header>
     
          <h1>
          <Link to="/facts" className="site-title">Dev quid</Link>
        </h1>
        <Nav />
      
    </header>
        </>
    )
}

export default Header