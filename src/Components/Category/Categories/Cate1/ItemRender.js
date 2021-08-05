import React from 'react';
import bicycle from "../../../../images/cate_img_bycicle.jpg";
import image from "../../../../images/1.jpg";
import {Col} from "antd";
import {Link} from "react-router-dom";
import Heart from "../../../../utils/Heart";

export default function ItemRender({ sort }){
    const sellList = [{id: 1, name: "bicycle", price: 10000, date: new Date("2020-01-20"), heart: 4, img: bicycle, brand: "WIAWIS"},
        { id: 2, name: "image", price: 15000, date: new Date("2021-07-30"), heart: 2, img: image, brand: "MINIONS"},
        { id: 3, name: "temperature", price: 30000, date: new Date("2021-07-20"), heart: 9, img: image, brand: "MINIONS"},
        { id: 4, name: "임시제목", price: 120000, date: new Date("2009-07-30"), heart: 1, img: image, brand: "MINIONS"},
        { id: 5, name: "마지막", price: 10000, date: new Date("2021-07-30"), heart: 0, img: bicycle, brand: "WIAWIS"}];
    // 임시 데이터

    // 정렬 알고리즘
    switch (sort){
        case "new":
            sellList.sort((a, b) => b.date.getTime() - a.date.getTime());
            break;
        case "past":
            sellList.sort((a, b) => a.date.getTime() - b.date.getTime());
            break;
        case "price_high":
            sellList.sort((a, b) => b.price - a.price);
            break;
        case "price_low":
            sellList.sort((a, b) => a.price - b.price);
            break;
        case "heart":
            sellList.sort((a, b) => b.heart - a.heart);
            break;
        default:
    }
    //////////////


    return sellList.map((item, index) => {
            return (
                <Col key={index} style={{ width: "25%" }}>
                    {" "}
                    <Heart/>
                    <Link to={"./temp".concat("?id=" + item.id)}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit:"cover"
                                }}
                                src={item.img}
                                alt={"상품"}
                            />
                        </div>

                    <div>
                        <h2>{item.name}</h2>
                        <p style={{textAlign:"right", color:"black"}}>₩
                            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p> {/* 가격을 3자리 단위로 끊음*/}
                    </div></Link>
                </Col>
            );
        });
}