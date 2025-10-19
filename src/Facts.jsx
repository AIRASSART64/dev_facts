import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Facts() {
// avant de lancer le chargement de l'API
  const [facts, setFacts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  
  async function fetchFacts () { // récupération  des facts de l'API au format json pour être exploités par React
    try { 
      setLoading(true);
      const response = await fetch("/api/facts"); 
    
      if (!response.ok) { 
        throw new Error("Erreur lors du chargement");
      }
      const data = await response.json(); 
      //  console.log("Data reçue :", data);
      const sortedFacts = data.member.sort((a, b) => b.id - a.id); // facts affichés par ordre d'ancienenté décroissant
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
  // useEffect controle la fonction de récupération des données et permet d'éviter les boucles infinies.
  // Aptrés une modification, une suppression ou une création d'un fact, le retour à la liste des facts entraine un remontage du tableau des facts ce qui déclenche useEffect 

  if (loading) return <p>Merci de patienter pendant le chargement</p>;
  if (error) return <p>{error}</p>;

  return (
    <>

  <div className="facts-container">
    {facts.map((fact, index) => ( // map permet de boucler pour afficher toutes les facts
      <Link key={index} to={`/facts/${fact.id}`} className="fact-link">
        <article>
          <h2 className="techno">{fact.techno}</h2>
          <p>{fact.fact.length > 100 ? fact.fact.slice(0, 100) + "..." : fact.fact}</p> 
        </article>
      </Link>
    ))}
  </div>
</>
  );
}

export default Facts;