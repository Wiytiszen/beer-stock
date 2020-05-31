import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import  store from './store/store';
import Main from './components/Main';
import List from './components/List';
import GroupForm from './components/GroupForm';
import RapidForm from './components/RapidForm';
import ItemForm from './components/ItemForm';
import Item from './components/Item';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">

      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/list/items" component={List}/>
        <Route exact path="/list/groups" component={List}/>
        <Route  path="/list/items/:item" component={Item}/>
        <Route  path="/list/groups/:group" component={List}/>
        <Route  path="/createGroup" component={GroupForm}/>
        <Route  path="/editGroup/:group" component={GroupForm}/>
        <Route  path="/itemForm/:itemId" component={ItemForm}/>
        <Route  path="/itemForm" component={ItemForm}/>
        <Route  path="/rapidForm/out" component={RapidForm}/>
        <Route  path="/rapidForm/in/:itemId" component={RapidForm}/>
        {/* STOCK OUT */}
        <Route  path="/rapidForm/in/:itemId" component={RapidForm}/>
        <Route  path="/rapidForm/in/:itemId" component={RapidForm}/>
        <Route  path="/rapidForm/in/:itemId" component={RapidForm}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
