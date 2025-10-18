import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Facts() {

  const [facts, setFacts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  
  async function fetchFacts () { 
    try {
      setLoading(true);
      const response = await fetch("/api/facts"); 
    
      if (!response.ok) { 
        throw new Error("Erreur lors du chargement");
      }
      const data = await response.json(); 
       console.log("Data reçue :", data);
       const sortedFacts = data.member.sort((a, b) => b.id - a.id);
      setFacts(sortedFacts); 
      setLoading(false); 
    } catch (error) {
      setLoading(false); 
      setError("Impossible de récupérer la data");
    
    }
  };

  useEffect(() => {
   fetchFacts();
  }, []);

  if (loading) return <p>Merci de patienter pendant le chargement</p>;
  if (error) return <p>{error}</p>;

  return (
    <>

  <div className="facts-container">
    {facts.map((fact, index) => (
      <Link key={index} to={`/facts/${fact.id}`} className="fact-link">
        <article>
          <div className="techno">{fact.techno}</div>
          <p>{fact.fact.length > 100 ? fact.fact.slice(0, 100) + "..." : fact.fact}</p>
        </article>
      </Link>
    ))}
  </div>
</>
  );
}

export default Facts;