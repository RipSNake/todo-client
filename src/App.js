import './App.css';
// Router
import {
  BrowserRouter as Router,
  Switch,
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
        <Link to="/">Home</Link>
        <Link to="/tasks">To-Do List</Link>
        <Link to="/folders">Folders</Link>

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
            <h1>BASE ROUTE</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
