import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Offer from './Pages/Offer'
import Footer from './components/Footer';
import Contact from './Pages/Contact'
import Realizations from './Pages/Realizations'
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
            <Route path="/Realizations">
             <Realizations />
            </Route>
          </Switch>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
