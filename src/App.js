import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Music from './Pages/Music/Music'
import Musician from './Pages/Musician/Musician'
import Login from './Pages/Login/Login'
import Navbar from './components/Navbar/Navbar'


const LoginContainer = () => (
  <div>
    <Route path='/login' exact component={Login} />
  </div>
)


 const DefaultContainer = () => (
    <div>
      <Navbar/>
      <Route path='/' exact component={Music} />
      <Route path='/musician' exact component={Musician} />
    </div>
 )

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/(login)" component={LoginContainer}/>
            <Route component={DefaultContainer}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
