import React from 'react';
import bicycle from "../../../../images/cate_img_bycicle.jpg";
import image from "../../../../images/1.jpg";
import {Col} from "antd";
import {Link} from "react-router-dom";

export default function ItemRender({ sort }){
    const sellList = [{ name: "bicycle", price: 10000, date: "20200120", heart: 4, img: bicycle},
        { name: "image", price: 15000, date: "20210730", heart: 2, img: image},
        { name: "temperature", price: 30000, date: "20210720", heart: 9, img: image},
        { name: "임시제목", price: 120000, date: "20090730", heart: 1, img: image},
        { name: "마지막", price: 10000, date: "20210730", heart: 0, img: bicycle}];

    // 정렬 알고리즘
    switch (sort){
        case "new":
            sellList.sort((a, b) => parseInt(b.date) - parseInt(a.date));
            break;
        case "past":
            sellList.sort((a, b) => parseInt(a.date) - parseInt(b.date));
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
                    <Link to="#">
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
                        <p style={{textAlign:"right", color:"black"}}>₩ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div></Link>
                </Col>
            );
        });
}