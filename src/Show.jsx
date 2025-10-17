import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Update from "./Update";
import Delete from "./Delete";


function Show() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [fact, setFact] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  async function fetchFact () { 
    try {
      setLoading(true);
      const response = await fetch(`/api/facts/${id}`); 
      const data = await response.json(); 

      setFact(data);  
      setLoading(false); 
    } catch (error) {
      setError("Impossible de récupérer la data");
    }
  };

  useEffect(() => {
   fetchFact();
  }, [id]);

  if (loading) return <p>Merci de patienter pendant le chargement</p>;
  if (error) return <p>{error}</p>;


  return (
    <>
     
        <article >  
          
          <h3> Anecdote numero  : {fact.id}</h3>
          <p> {fact.fact}</p>
          <p> Techno : {fact.techno}</p>

        </article>
      <div className="button-group">
        <button className="returnButton"><Link to="/facts">Toutes les anecdotes </Link></button>
       
      <button onClick={() => navigate(`/facts/update/${id}`)}>
        Modifier
      </button>
      <div>
        <Delete/>
      </div>
      </div>

       
    </>
  );
}
export default Show;