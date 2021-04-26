import React, { useState , R } from 'react';
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
import Climate from './climate';
import Shades from './shades';
import Plans from './plans';
import Dashboard from './dashboard';
import Setup from './setup';



const App = props => {


  return (<>
    <Router>
      <Header />
      <TopNav />
      <Switch className="page-layout">
        <Route exact path='/music' component={Music} />
        <Route exact path='/video' component={Video} />
        <Route exact path='/lighting' component={Lighting} />
        <Route exact path='/climate' component={Climate} />
        <Route exact path='/shades' component={Shades} />
        <Route exact path='/plans' component={Plans} />
        <Route exact path='/home' component={Dashboard} />
        <Route exact path='/setup' component={Setup} />
        {/* <Route path='/home' render={() => <h1 className="page-layout">welcome home!</h1>} /> */}
        {/* <Route render={() => <h1 className="page-layout">Welcome!</h1>} /> */}
        
      </Switch>
      <Footer />
    </Router>
  </>);
}

export default App;
