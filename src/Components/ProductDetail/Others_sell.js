import React from 'react';
import {Link} from "react-router-dom";

function Others_sell({ sell }){

    return sell.map((item) =>
        <div key={item.id}>
            <Link to="../category"> {/* 링크 나중에 바꿔줄 것.*/}
                <img src={item.img} className="others_img" alt="상품 이미지" />
                <p style={{color:"black"}}>{item.name}</p>
                <p style={{color:"black", marginBottom:"0"}}>₩ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
            </Link>
        </div>
    )
}

export default Others_sell;