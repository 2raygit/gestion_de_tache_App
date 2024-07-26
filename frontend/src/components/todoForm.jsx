import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



export default function TodoForm() {
  const [tache, setTache] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/tasks", { tache, description, image })
      .then(result => {console.log(result)
        navigate('/items')
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
          <Link to= '/items'class="btn btn-outline-primary">liste des taches</Link>
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-xl rounded-lg max-w-xl mx-auto mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="tache">Tâche</label>
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
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">Image URL</label>
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
        Ajouter Tâche
      </button>
    </form>
    </div>
  );
}
