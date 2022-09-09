import React from 'react';
import Header from './Header';
import Home from './Home';
import Offer from './Offer'
import Footer from './Footer';
import Contact from './Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <main className="main--router">
          <Switch>
            <Route exact path="/Home">
             <Home />
            </Route>
            <Route path="/Offer">
             <Offer />
            </Route>
            <Route path="/Contact">
             <Contact />
            </Route>
          </Switch>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
