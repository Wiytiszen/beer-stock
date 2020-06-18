import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import  store from './store/store';

import Menu from './components/menu/Menu';
import List from './components/list/List';
import GroupForm from './components/GroupForm';
import RapidForm from './components/RapidForm';
import ItemForm from './components/itemForm/ItemForm';
import Item from './components/item/Item';
import Batch from './components/batch/Batch';
import BatchEdit from './components/batchEdit/BatchEdit';
import BatchList from './components/batchList/BatchList';
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
        <Route exact path="/" component={Menu}/>
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
        
        <Route  path="/list/batchList" component={BatchList}/>
        <Route  path="/batch/new" component={BatchEdit}/>
        <Route  path="/batch/edit/:batchId" component={BatchEdit}/>
        <Route  path="/batch/show/:batchId" component={Batch}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
