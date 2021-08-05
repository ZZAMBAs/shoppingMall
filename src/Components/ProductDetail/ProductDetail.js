import React from "react";
import {Link} from "react-router-dom";
import bicycle from "../../images/cate_img_bycicle.jpg";
import image from "../../images/1.jpg";
import Others from "./Others"; // 다른 상품들을 보여주는 컴포넌트.
import qs from 'qs';
import './ProductDetail.css';

function ProductDetail( { location } ){
    const sellList = [{id: 1, name: "bicycle", price: 10000, date: new Date("2020-01-20"), heart: 4, img: bicycle, brand: "WIAWIS", cate: "카테고리1"},
        { id: 2, name: "image", price: 15000, date: new Date("2021-07-30"), heart: 2, img: image, brand: "MINIONS", cate: "카테고리1"},
        { id: 3, name: "temperature", price: 30000, date: new Date("2021-07-20"), heart: 9, img: image, brand: "MINIONS", cate: "카테고리1"},
        { id: 4, name: "임시제목", price: 120000, date: new Date("2009-07-30"), heart: 1, img: image, brand: "MINIONS", cate: "카테고리1"},
        { id: 5, name: "마지막", price: 10000, date: new Date("2021-07-30"), heart: 0, img: bicycle, brand: "WIAWIS", cate: "카테고리1"}];
    // 임시 데이터

    const loca = qs.parse(location.search, { ignoreQueryPrefix: true });

    const item = sellList.filter((list) => list.id === parseInt(loca.id));
    const { cate, img, brand, name, price, date } = item[0];

    return(
        <div className="D_Parent">
            <p style={{marginLeft: "10px", marginBottom:"auto", paddingTop:"5px"}}>홈 > <Link to={"./".concat(cate)}>{cate}</Link></p>
            <div className="sum">
                <img src={img} className="thumbnail" alt="상품 이미지" />
                <div className="spec">
                    <div>
                        <p style={{fontSize:"1rem", fontStyle:"italic"}}>{brand}</p>
                        <h1>{name}</h1>
                        <h1 style={{fontSize:"4rem"}}>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h1>
                        <h3>등록일: {date.toLocaleDateString()}</h3>
                    </div>
                    <div className="interaction">
                        <button className="talk">판매자와 대화하기</button> {/* 기능 미구현 */}
                        <div>
                            <button className="heart">찜하기</button>
                            <button className="cart">장바구니</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{margin: "5px 10px", fontSize:"1rem"}}>상품 설명란입니다.</div>
            <hr />
            <Others otherCate={sellList} otherSell={sellList.slice(1)} /> {/* 파라미터로는 카테고리 다른 상품들과 판매자의 다른 상품들. 여기선 임시로 넘김 */}
        </div>
    );
}

export default ProductDetail;