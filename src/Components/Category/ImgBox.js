import React from "react";
import './CateList.css';
import {Link} from "react-router-dom";

export default function ImgBox({ cate }){ // cateObj


    return cate.map(({name, src}, idx) => { // 각 카테고리 대표 이미지와 그 이름으로 구성된 배열
        const link = "./category/".concat(name); // 연결 하이퍼 링크
        return(
            <div className="img_box" key={idx}>
                <Link to={link}><img src={src} className="thumbnail" alt={name}/><span className="thbName">{name}</span></Link>
            </div>
        )
    });
}