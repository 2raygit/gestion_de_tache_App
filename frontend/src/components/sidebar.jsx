import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  const handleMenuClick = (path) => {
    setActiveMenu(path);
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-full flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gray-900 flex items-center">
        <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2 2l4-4l6 6l6-6l2 2" />
        </svg>
        <span className="ml-3 text-xl font-semibold">MyApp</span>
      </div>

      {/* Navigation */}
      <nav className="flex-grow mt-4">
        <ul>
          <li>
            <Link 
              to="/" 
              className={`flex items-center p-2 rounded-lg ${activeMenu === '/' ? 'bg-gray-700' : 'hover:bg-gray-600'} transition-colors duration-300`}
              onClick={() => handleMenuClick('/')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2 2l4-4l6 6l6-6l2 2" />
              </svg>
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/items" 
              className={`flex items-center p-2 rounded-lg ${activeMenu === '/items' ? 'bg-gray-700' : 'hover:bg-gray-600'} transition-colors duration-300`}
              onClick={() => handleMenuClick('/items')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2 2l4-4l6 6l6-6l2 2" />
              </svg>
              Tasks
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 bg-gray-900 flex items-center border-t border-gray-700">
        <div className="avatar flex items-center">
          <img src="https://i.pravatar.cc/150?img=30" alt="User Avatar" className="h-10 w-10 rounded-full border border-gray-500" />
          
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
