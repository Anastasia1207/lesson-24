import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/">
                    </Route>
                    <Route path="/categories">
                    </Route>
                    <Route path="/card">
                    </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
    }
export default App;
