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

function App() {
  return (
    <Router>
      <div className="App container">
        <Link to="/">Home</Link>
        <Link to="/tasks">To-Do List</Link>
        <Link to="/folders">Folders</Link>

        <Switch>
          <Route path="/folders">
            <h1>From FOLDERS !</h1>
          </Route>
          <Route path="/folders/:id">
            <h1>From Folder ID</h1>
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
