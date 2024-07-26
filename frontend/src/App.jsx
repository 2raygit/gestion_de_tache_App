import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import Header from "./components/header";
import UpdatedTask from "./components/UpdateTask";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-grow p-6">
            <Routes>
              <Route path="/" element={<TodoForm />} />
              <Route path="/items" element={<TodoList />} />
              <Route path="/update/:id"element={<UpdatedTask />} />
              
            </Routes>
          </main>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
