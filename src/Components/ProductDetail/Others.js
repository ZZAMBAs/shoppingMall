import React from "react";
import {Link} from "react-router-dom";
import defaultProfile from "../../images/DefaultProfile.jpeg";
import Others_sell from "./Others_sell";
import "./Others.css";

function Others({otherSell, otherCate}) {
    return(
        <div>
            <h1>판매자의 다른 상품</h1>
            <div className="others_seller">
                <div className="seller">
                    <Link to="../category"> {/* 임시 링크 */}
                        <img src={defaultProfile} className="profile" alt="판매자 프로필사진" />
                        <h4 style={{textAlign:"center"}}>판매자이름</h4>
                    </Link>
                </div>
                <div className="others_sell">
                    <Others_sell sell={otherSell} /> {/* sell 속성엔 데이터를 받아서 넣음 */}
                </div>
            </div>
            <h1 style={{marginTop:"10px"}}>이 카테고리 내 다른 상품</h1>
            <div className="others_cate">
                <Others_sell sell={otherCate} /> {/* sell 속성엔 데이터를 받아서 넣음 */}
            </div>
        </div>
    );
}

export default Others;