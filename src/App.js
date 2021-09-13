import React from 'react'
import Sidenav from './Component/Sidenav';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import All from './Component/All';
import Chicken from './Component/Chicken';
import Mutton from './Component/Mutton';
import Fish from './Component/Fish';
import Chineese from './Component/Chineese';
import Details from './Component/Details';
import Searchitem from './Component/Searchitems';
import Additems from './Component/Additems';
import Addingredient from './Component/Addingredient';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidenav />
        <Switch>
          <Route exact path="/" component={All} />
          <Route exact path="/Chicken" component={Chicken} />
          <Route exact path="/Mutton" component={Mutton} />
          <Route exact path="/Fish" component={Fish} />
          <Route exact path="/Chineese" component={Chineese} />
          <Route exact path="/detail/:id" component={Details} />
          <Route exact path="/search/:name" component={Searchitem} />
          <Route exact path="/additem" component={Additems} />
          <Route exact path="/ingredient/:id" component={Addingredient} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
