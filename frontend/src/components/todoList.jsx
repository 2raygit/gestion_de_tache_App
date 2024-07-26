import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import { Link } from 'react-router-dom';

const TodoList = ({ onComplete, onEdit, onDelete }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des tâches', error);
      }
    };

    fetchTasks();
  }, []);

  const handleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
    onComplete(id);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    onDelete(id);
  };

  const handleEdit = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      )
    );
    onEdit(updatedTask);
  };

  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No todos available. Please add some.</p>;
  }

  return (
    <div>
       <Link to= '/'class="btn btn-outline-primary">retour</Link>
    <div className="todo-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          task={task}
          onComplete={handleComplete}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
    </div>
  );
};

TodoList.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
