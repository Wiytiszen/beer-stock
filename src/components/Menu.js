import React from "react"
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Menu = (props) =>{

  return(
    <div className = "main-menu">
        <div className="myMenu">
          <ButtonGroup
          className ="MuiButton-startIcon"
          orientation="vertical"
          fullWidth="true"
          color="primary"
          aria-label="vertical outlined primary button group"
          >
          <Button><Link exact to="/list/items">All Items</Link></Button>
          <Button><Link to="/list/groups">Categories</Link></Button>
          <Button><Link to="/itemForm">Load Item</Link></Button>
          <Button><Link to="/list/item">Item random</Link></Button>
          </ButtonGroup> 
        </div>
    </div>
  )
}

export default Menu;