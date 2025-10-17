import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Update from "./Update";
import Delete from "./Delete";


function Show() {
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
          <p> Type ou techno : {fact.techno}</p>

        </article>


        <div>
          <Update />
        </div> 

      <div>
        <Delete/>
      </div>

        <Link to="/facts">← Quid </Link>
    </>
  );
}
export default Show;