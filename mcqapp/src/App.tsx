import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link //@ts-ignore
} from "react-router-dom";
import Home from './component/Home';
import Questions from './component/Questions';
import Results from './component/Results';
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/" exact={true}>
        <Home/>
      </Route>
      <Route path="/questions" >
        <Questions/>
      </Route>
      <Route path="/results" component={Results}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
