
import './App.css';
import Calc from './calculator'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
    <Switch>
      <Route path="/">
     <Calc />
     </Route>
     </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
