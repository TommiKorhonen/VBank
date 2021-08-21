import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  
  return (
    <>
    <Router >
      <ScrollToTop />
      <Switch>
        <Route path="/VBank" exact component={Home}/>
        <Route path="/signIn" exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
