import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/items':
        return 'Liste des Tâches';
      case '/':
        return 'Ajouter une Tâche';
      case '/update/:id':
        return 'Modifier une Tâche';
      default:
        return 'Modifier une Tâche';
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="navbar-item">{getTitle()}</a>
      </div>
    </div>
  );
}
