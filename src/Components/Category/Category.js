import React from "react";
import CateList from './CateList';
import Cate1 from './Categories/Cate1/Cate1';
import ProductDetail from '../ProductDetail/ProductDetail'; // 임시 임포트
import {Route, BrowserRouter as Router} from "react-router-dom";

function Category() {
  return (
      <div>
          <Router>
              <Route exact path="/category" component={CateList} />
              <Route exact path="/category/카테고리1" component={Cate1} />
              <Route exact path="/category/temp" component={ProductDetail} /> {/*상품 상세페이지를 보여주기 위한 임시 루트*/}
          </Router>
      </div>
  );
}

export default Category;
