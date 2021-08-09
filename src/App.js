import './App.css';
// Router
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
// components
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import FolderList from './components/FolderList';
import Folder from './components/Folder';

function App() {
  return (
    <Router>
      <div className="App container">
        <nav className="nav justify-content-center my-3">
          <Link className="nav-item mx-2" to="/">Home</Link>
          <Link className="nav-item mx-2" to="/tasks">To-Do List</Link>
          <Link className="nav-item mx-2" to="/folders">Folders</Link>
        </nav>

        <Switch>
          <Route path="/folders/:id">
            <Folder />
          </Route>
          <Route path="/folders">
            <FolderList />
          </Route>
          <Route path="/tasks/:id">
            <EditTask />
          </Route>
          <Route path="/tasks">
            <TaskList />
          </Route>
          <Route path="/" exact>
            <Redirect to={'/folders'} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
