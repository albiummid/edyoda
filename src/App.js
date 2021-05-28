import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <Dashboard />
          </Route>
          <Route path='/:currentPath' >
            <Dashboard />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
