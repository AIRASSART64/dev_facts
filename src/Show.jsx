import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Show() {

  const [fact, setFact] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const {id} = useParams();


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


  return (
    <>
     
        <article >  
          
          <h3> Anecdote numero  : {fact.id}</h3>
          <p> {fact.fact}</p>
          <p> Type ou techno : {fact.techno}</p>

        </article>

        <Link to="/facts">← Quid </Link>
    </>
  );
}
export default Show;