import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import NoMatch from './components/NoMatch';

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
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />

          <Route component={NoMatch} />
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;