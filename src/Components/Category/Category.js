import React from "react";
import CateList from './CateList';
import Cate1 from './Categories/Cate1/Cate1';
import {Route, BrowserRouter as Router} from "react-router-dom";
import './Category.css'

function Category() {
  return (
      <div>
          <Router>
              <Route exact path="/category" component={CateList} />
              <Route exact path="/category/카테고리1" component={Cate1} />
          </Router>
      </div>
  );
}

export default Category;
