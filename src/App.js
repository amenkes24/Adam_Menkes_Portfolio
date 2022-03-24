import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
    <div>
      <Nav></Nav>
      <main>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/skills" component={Skills} />

          <Route component={NoMatch} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;