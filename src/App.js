import Splachscreen from './components/splachscreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/MainScreen/index'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><Splachscreen /></Route>
          <Route path='/home'><Home></Home></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
