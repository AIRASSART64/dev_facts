import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewFact() {
  const navigate = useNavigate();
  const [fact, setFact] = useState("");
  const [techno, setTechno] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page pour qu'on puisse envoyer 

    try {
      const response = await fetch("/api/facts", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
        },
        body: JSON.stringify({"@context": "/api/contexts/Fact", "fact": fact, "techno": techno }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Fact créé avec succès !");
        setFact("");
        setTechno("");
       
      } else {
        console.error("Erreur:", data);
        setMessage(
          data.error
            ? `${data.error}`
            : "Une erreur est survenue lors de la création."
        );
      }
      navigate("/facts")
      
    } catch (error) {
      console.error(error);
      setMessage("Erreur de connexion au serveur");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Créer un nouveau Fact</h2>
      <label htmlFor="techno">Théme ou techno concérné:</label>
      <input
        type="text"
        placeholder="La techno (ex: React)"
        value={techno}
        onChange={(e) => setTechno(e.target.value)}
        required
      />
      <label htmlFor="fact">L'adecdote :</label>
      <textarea
        id="fact"
        placeholder="Rédigez votre texte (ex : React est cool)"
        value={fact}
        onChange={(e) => setFact(e.target.value)}
        required
        rows="5"
      ></textarea>
      <button
        type="submit"
      >
        Créer
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default NewFact;
