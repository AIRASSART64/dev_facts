import { useEffect, useState } from "react";

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
    
      setFacts(data.member); 
      setLoading(false); 
    } catch (error) {
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
      <h2>Quid </h2>
      {facts.map((fact, index) => ( 
        <article key={index}>  
          <h3> Anecdote numero  : {fact.id}</h3>
          <p> {fact.fact}</p>
          <p> {fact.techno}</p>
        </article>
      ))}
    </>
  );
}

export default Facts;