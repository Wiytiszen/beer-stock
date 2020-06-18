import React from "react";
import Header from "../header/Header";
import "./menu.css";

import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
    <Header/>
    <div className="main-menu">
      <div className="menu-btn-list">
        <div className="main-btns">
          <div className="square-btn-lg menu-button button">
            <Link exact to="/list/items">
              <div className="btn-text">
                <i className="fas fa-boxes"></i>
                <p>All Goods</p>
                <span>{`130 Units`}</span>
              </div>
              
            </Link>
          </div>
          <div className="group-btn-small">
            <div className="square-btn-small menu-button button">
              <Link to="/itemForm">
                <div className="btn-text">
                  <i className="fas fa-plus"></i>
                </div>
              </Link>
            </div>
            <div className="square-btn-small menu-button button">
              <Link to="/rapidForm/out">
                <div className="btn-text">
                  <i className="fas fa-minus"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="full-width-btn menu-button button">
          <Link to="/list/groups">Categories</Link>
        </div>
        <div className="full-width-btn menu-button button">
          <Link to="/list/batchList">Stock Out </Link>
        </div>
        <div className="full-width-btn menu-button button">
          <Link to="/">Contacts </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Menu;
