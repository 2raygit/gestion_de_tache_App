import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdatedTask() {
  const [tache, setTache] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Obtenez l'ID de la tâche à partir de l'URL

  useEffect(() => {
    // Fetch the task details
    axios
      .get(`http://localhost:3001/tasks/${id}`)
      .then((result) => {
        console.log(result.data);
        setTache(result.data.tache);
        setDescription(result.data.description);
        setImage(result.data.image);
      })
      .catch((err) => console.log(err));
  }, [id]); // Ajoutez `id` comme dépendance pour exécuter `useEffect` lorsque `id` change

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/tasks/${id}`, {
        tache,
        description,
        image,
      })
      .then((result) => {
        console.log(result);
        navigate('/items');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to='/items' className="btn btn-outline-primary">
        Liste des tâches
      </Link>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white shadow-xl rounded-lg max-w-xl mx-auto mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="tache"
          >
            Tâche
          </label>
          <input
            type="text"
            id="tache"
            value={tache}
            onChange={(e) => setTache(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Modifier
        </button>
      </form>
    </div>
  );
}
