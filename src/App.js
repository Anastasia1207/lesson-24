import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Article from './Components/Article';

import Card from './Components/Card';


import Product1 from './Components/Product1';

import Categories3 from './Components/Categories3';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route path="/categories">
                    </Route>
                
                     <Route path="/Categories3">
                        <Categories3 />
                    </Route>
                    </Route>
                    <Route path="/card">
                      <Card />

                    <Route path="/category1">
                        <Category1 />
                    </Route>
                    <Route path="/product1">
                        <Product1 />

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
