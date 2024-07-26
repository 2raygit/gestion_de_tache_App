import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TodoItem({ task, onUpdate, onDelete, onComplete }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${task._id}`);
      onDelete(task._id);
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche", error);
    }
  };

  const handleUpdate = () => {
    onUpdate(task);
  };

  const handleComplete = () => {
    onComplete(task._id);
  };

  return (
    <div className={`card shadow-lg rounded-lg overflow-hidden ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
      {task.image && (
        <img
          src={task.image}
          alt={task.tache}
          className="w-full h-40 object-cover"
        />
      )}
      <div className={`p-4 ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-2 ${task.completed ? 'text-gray-600 line-through' : ''}`}>
          {task.tache}
        </h2>
        <p className={`text-gray-700 mb-4 ${task.completed ? 'text-gray-500 line-through' : ''}`}>
          {task.description}
        </p>
        <div className="flex justify-between space-x-2">
          <Link to={`/update/${task._id}`}
            className="btn btn-secondary"
            onClick={handleUpdate}
          >
            Modifier
          </Link>
          <button
            className="btn btn-error"
            onClick={handleDelete}
          >
            Supprimer
          </button>
          <button
            className={`btn ${task.completed ? 'btn-error' : 'btn-primary'}`}
            onClick={handleComplete}
          >
            {task.completed ? 'refaire' : 'Compléte'}
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    tache: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};
