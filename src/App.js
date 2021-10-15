import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import Reservation from './Components/Reservation';
import About from './Components/About';
import Menuone from './Components/Menuone';
import Location from './Components/Location';
import Footer from './Components/Footer'
document.title = "Uncle Sam's Kitchen";


const App = () => {
  return (<>

    <Navbar />

    <Switch>
      <Route exact={true}  path="/" component={Menuone} />
      <Route path="/Location" component={Location} />
      <Route path="/Reservation" component={Reservation} />
      <Route path="/About" component={About} />
      <Route component={Error} />
    </Switch>

    <Footer />
  </>
  )
}

export default App;
