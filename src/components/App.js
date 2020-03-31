import React, { useState } from 'react';
import '../scss/App.css';
import Header from './header/index';
import Footer from './footer/index';
import '../scss/header.css';
import '../scss/footer.css';
import '../scss/layout.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js'
import '../scss/checkbox.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Music from '../components/music/index'
import Video from '../components/video/index';
import Lighting from '../components/lighting/index'

const App = props => {

  return (<>
    <Router>
      <Header />
      <Switch>
        <Route exactly path='/' component={Lighting} />
        <Route exactly path='/music' component={Music} />
        <Route exactly path='/video' component={Video} />
        <Route exactly path='/lighting' component={Lighting} />
        <Route render={() => <h1 className="page-layout">404: page not found</h1>} />
      </Switch>
      <Footer />
    </Router>
  </>);
}

export default App;
