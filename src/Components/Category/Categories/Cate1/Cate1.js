import React, {useState} from "react";
import { Row } from "antd";
import ItemRender from "./ItemRender";
import './Cate1.css';

function Cate1() {
    const [sorting, setSorting] = useState("new"); // 상품 정렬 기준. (기본값: 신상품순)

    return (
        <div className="Parent">
            <div className="list_outline">
                <div>
                    <h2 className="list_name">카테고리1</h2>
                </div>
                    <select className="filtering" onChange={(e) => setSorting(e.target.value)}>
                        <option value="new">신상품순</option>
                        <option value="past">과거순</option>
                        <option value="price_high">가격 높은순</option>
                        <option value="price_low">가격 낮은순</option>
                        <option value="heart">찜 많은 순</option>
                    </select>
            </div>
            <Row gutter={[16, 16]}>
                <ItemRender sort={sorting} /> {/* 상품 렌더링*/}
            </Row>
        </div>
    );
}

export default Cate1;
