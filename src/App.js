import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/homepage">

          </Route>
          <Route path="/categories">
            
            </Route>
            <Route path="/card">
            
            </Route>
         
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
