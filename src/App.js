import React from 'react';
import { Route}  from 'react-router-dom';
import { Switch}  from 'react-router-dom';

import Welcome from './components/clock/welcome/Welcome';
import Clock from './components/clock/Clock';
import Navigation from './components/clock/navigation/Navigation';
import Contact from './components/clock/contact/Contact';
import Route404 from './components/clock/route404/Route404';
import Jeopardy from './components/clock/jeopardy/Jeopardy';

function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props}
          name="Rosemarie" /> }
        />

        <Route
          path="/welcome/:name"
          component={Welcome}
        />

        <Route
          path="/clock"
          component={Clock}
        />

        <Route
          exact
          path="/contact"
          component={Contact}
        />


        <Route
          exact
          path="/jeopardy"
          component={Jeopardy}
        />

        <Route
          exact
          path="/route404"
          component={Route404}
        />


        <Route
          exact
          path="/contact/:RoseData"
          component={Contact}
        />



        

      </Switch>

    </div>
  );
}

export default App;
