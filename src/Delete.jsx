import { useState } from "react";
import { useParams, useNavigate} from "react-router-dom";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const handleDelete = async () => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette anecdote ?")) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/facts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erreur lors de la suppression");
      navigate("/facts");
    } catch (error) {
     setError("Impossible de supprimer l'anecdote ");
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p>{error}</p>;


  return (
    <div>

      <button
        onClick={handleDelete}
        
        className="deleteButton"
      >
        Supprimer
      </button>
     
    </div>
  );
}

export default Delete;
