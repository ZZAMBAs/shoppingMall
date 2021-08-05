import React, {useState} from "react";
import * as BiIcons from "react-icons/bi";
import {AiFillHeart} from "react-icons/all";
//찜하기 기능
function Heart(props) {
    const [state, setState] = useState(false); // 서버에서 데이터 가져와서 true인지 false인지 결정.
    function onClick(){
        // 로그인 안되어 있으면 로그인 강제
        setState(!state);
        // 해당 상품을 마이페이지 찜 목록에 추가.
    }
    
  return (
    <div style={{ fontSize: "30px", color: "red", position: "absolute", right: "15px", top: "15px"}}>
        {state === false ? <BiIcons.BiHeart style={{cursor:"pointer"}} onClick={onClick} /> : <AiFillHeart style={{cursor:"pointer"}} onClick={onClick} />}
    </div>
  );
}

export default Heart;
