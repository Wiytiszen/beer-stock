import React from 'react';
import {Provider} from 'react-redux';
import  store from './store/store';
import List from './components/List';
import Menu from './components/Menu';
import GroupForm from './components/GroupForm';
import RapidForm from './components/RapidForm';
import ItemForm from './components/ItemForm';
import Item from './components/Item';
import Batch from './components/Batch';
import BatchEdit from './components/BatchEdit';
import BatchList from './components/BatchList';
import './index.css';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
const Routes = <Provider store={store}>
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
    {/* STOCK OUT */}
    <Route  path="/list/batchList" component={BatchList}/>
    <Route  path="/batch/new" component={BatchEdit}/>
    <Route  path="/batch/edit/:batchId" component={BatchEdit}/>
    <Route  path="/batch/show/:batchId" component={Batch}/>
  </Switch>
</HashRouter>
</Provider>
const App = (props)=>{
  return <Routes/>
}

export default App;