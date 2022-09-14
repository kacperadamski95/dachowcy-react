import React from 'react';
import Header from './components/Header';
import Home from './pages/home';
import Offer from './pages/offer'
import Footer from './components/Footer';
import Contact from './pages/contact'
import Realizations from './pages/realizations'
import Realization1 from './pages/realizations-subpages/realization1'
import Realization2 from './pages/realizations-subpages/realization2'
import Realization3 from './pages/realizations-subpages/realization3'
import Realization4 from './pages/realizations-subpages/realization4'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <main className="main--router">
          <Switch>
            <Route exact path="/home">
             <Home />
            </Route>
            <Route path="/offer">
             <Offer />
            </Route>
            <Route path="/contact">
             <Contact />
            </Route>
            <Route path="/realizations">
             <Realizations />
            </Route>
            <Route path="/realization1">
             <Realization1 />
            </Route>
            <Route path="/realization2">
             <Realization2 />
            </Route>
            <Route path="/realization3">
             <Realization3 />
            </Route>
            <Route path="/realization4">
             <Realization4 />
            </Route>
          </Switch>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
