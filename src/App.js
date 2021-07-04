import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Adress from './Components/Adress';
import Summary from './Components/Summary';
import Category1 from './Components/Category1';
import Product1 from './Components/Product1';
import Categories3 from './Components/Categories3';
import Error404 from './Components/Error404';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Banner />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/categories">
                    </Route>
                    <Route path="/category1">
                        <Category1 />
                    </Route>
                    <Route path="/Categories3">
                        <Categories3 />
                    </Route>
                    <Route path="/product1">
                        <Product1 />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/adress">
                        <Adress />
                    </Route>
                    <Route path="/summary">
                        <Summary />
                    </Route>
                    <Route>
                        <Error404 />
                    </Route>
                </Switch>
                <Footer />

            </Router>
        </div>
    )
}
export default App;
