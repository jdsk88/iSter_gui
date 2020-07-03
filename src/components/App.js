import React, { useState } from 'react';
import '../scss/App.css';
import Header from './header/index';
import Footer from './footer/index.old';
import TopNav from './topnav/index.old';
import '../scss/header.css';
import '../scss/footer.css';
import '../scss/layout.css';
import '../scss/topnav.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js'
import '../scss/checkbox.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Music from '../components/music/index';
import Video from '../components/video/index';
import Lighting from '../components/lighting/index';
import AddDevice from '../components/lighting/AddDevice';
import AllDevices from '../components/lighting/AllDevices';
import Settings from '../components/lighting/Settings';

const App = props => {

  return (<>
    <Router>
      <Header />
      <TopNav />
      <Switch className="page-layout">
        <Route exactly path='/music' component={Music} />
        <Route exactly path='/video' component={Video} />
        <Route exactly path='/lighting' component={Lighting} />
        <Route exactly path='/add_device' component={AddDevice} />
        <Route exactly path='/all_devices' component={AllDevices} />
        <Route exactly path='/lighting_settings' component={Settings} />
        <Route path='/' render={() => <h1 className="page-layout">welcome!</h1>} />
        {/* <Route render={() => <h1 className="page-layout">Welcome!</h1>} /> */}
      </Switch>
      <Footer />
    </Router>
  </>);
}

export default App;
