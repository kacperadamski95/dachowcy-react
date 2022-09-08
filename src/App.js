import React from 'react';
import Header from './Header';
import Home from './Home';
import Offer from './Offer'
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <main className="main--router">
          <Switch>
            <Route path="/">
              {/* <Home /> */}
              <Offer />
            </Route>
          </Switch>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
