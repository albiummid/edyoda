import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Dashboard/Topbar/Topbar';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Modules from './pages/Modules/Modules';
import Instructors from './pages/Instructors/Instructors';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Topbar />
        <div className='section_container'>
          <Sidebar />
          <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route path='/modules' >
              <Modules />
            </Route>
            <Route path='/instructors' >
              <Instructors />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
