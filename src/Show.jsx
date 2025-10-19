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
  const [relatedFacts, setRelatedFacts] = useState([]);

  // récupére les données du fact séléctionné par son id pour affichage du résultat dans le format de la page show

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

  // récupération des facts qui ont le même donnée techno que le fact précédent
  async function fetchRelatedFacts(techno) {
    try {
      const response = await fetch("/api/facts");
      const data = await response.json();
      const sameTechFacts = data.member.filter( 
        // filtrage des facts par techno en excluant le fact précédent
        (fact) => fact.techno === techno && fact.id !== parseInt(id)
      ); 
      
      setRelatedFacts(sameTechFacts);
    } catch (error) {
      console.error("Erreur lors du chargement des facts similaires :", error);
    }
  }

  useEffect(() => {
   fetchFact();
  }, [id]);
// vérification que fact et fact techno existe bien pour lancer fetchRelatedFacts qui dépend du fact principal
  useEffect(() => {
    if (fact && fact.techno) {
      fetchRelatedFacts(fact.techno);
    }
  }, [fact]);

  if (loading) return <p>Merci de patienter pendant le chargement</p>;
  if (error) return <p>{error}</p>;


  return (
   <>
    <div className="show-container">
      <h2>{fact.techno}</h2>
      <p>{fact.fact}</p>
    </div>

    <div className="button-group">
      <button className="returnButton">
        <Link to="/facts">Retour liste</Link>
      </button>

      <button onClick={() => navigate(`/facts/update/${id}`)}>
        Modifier
      </button>

      <Delete />
    </div>
{/* instruction en js pour afficher les facts reliees aprés vérification de leur existance */}
    {relatedFacts.length > 0 && (
        <div className="related-section">
          <h3>Autres anecdotes sur {fact.techno}</h3>
          <div className="facts-container">
            {relatedFacts.map((related) => (
              <Link
                key={related.id}
                to={`/facts/${related.id}`}
                className="fact-link"
              >
                <article>
                  <div className="techno">{related.techno}</div>
                  <p>
                    {related.fact.length > 100
                      ? related.fact.slice(0, 100) + "..."
                      : related.fact}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}


  </>
  );
}
export default Show;