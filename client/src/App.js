import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import InteractiveApps from './components/InteractiveApps/InteractiveApps';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import finished from './components/Finished/Finished';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>

          <div style={{height: '100%'}}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <main style={{marginTop: '64px'}}>
              <Route exact path='/' component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/apps" component={InteractiveApps} />
              <Route path="/complete" component={finished} />
            </main>
          </div>

      </Router>
    );
  }
}

export default App;
