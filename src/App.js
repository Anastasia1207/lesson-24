import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Article from './Components/Article';
import Categories3 from './Components/Categories3';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/categories">
                    </Route>
                    <Route path="/Categories3">
                      <Categories3 />
                    </Route>
                    <Route path="/card">
                    </Route>
                    <Route path="/article">
                        <Article />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}
export default App;
