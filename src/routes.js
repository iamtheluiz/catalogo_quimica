import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Normas from './pages/Normas';
import Vidrarias from './pages/Vidrarias';
import Equipamentos from './pages/Equipamentos';
import Simbologia from './pages/Simbologia';
import Referencias from './pages/Referencias';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/normas" exact component={Normas} />
        <Route path="/vidrarias" exact component={Vidrarias} />
        <Route path="/equipamentos" exact component={Equipamentos} />
        <Route path="/simbologia" exact component={Simbologia} />
        <Route path="/referencias" exact component={Referencias} />
      </Switch>
    </BrowserRouter>
  )
}