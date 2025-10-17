import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const {id } = useParams();
  const [fact, setFact] = useState("");
  const [techno, setTechno] = useState("");
  const [message, setMessage] = useState("");
  

    useEffect(() => {
    const fetchFact = async () => {
        const res = await fetch(`/api/facts/${id}`);
        if (res.ok) {
        const data = await res.json();
        setFact(data.fact);
        setTechno(data.techno);
        }
    };
    fetchFact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page pour qu'on puisse envoyer 

    try {
      const response = await fetch(`/api/facts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/ld+json",
        },
        body: JSON.stringify({"@context": "/api/contexts/Fact", "fact": fact, "techno": techno }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Fact modifié avec succès !");
      } else {
        console.error("Erreur:", data);
        setMessage(
          data.error
            ? `${data.error}`
            : "Une erreur est survenue lors de la modification."
        );
      }
      navigate("/facts");
    } catch (error) {
      console.error(error);
      setMessage("Erreur de connexion au serveur");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Modifier le Fact</h2>
      <label htmlFor="fact">Fact :</label>
      <input
        type="text"
        value={fact}
        onChange={(e) => setFact(e.target.value)}
        required
      />
      <label htmlFor="techno">Techno :</label>
      <input
        type="text"
        value={techno}
        onChange={(e) => setTechno(e.target.value)}
        required
      />

      <button
        type="submit"
      >
        Mettre à jour
      </button>

      {message && <p>{message}</p>}
    </form>
    
    </>


  );
}

export default Update;
