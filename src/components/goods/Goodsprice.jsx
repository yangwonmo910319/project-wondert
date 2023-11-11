import styled,{ css } from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 350px;
    height: 600px;
    margin-top: 10px;
    position: sticky;
    top: 0;
    transition: all 3s ease;
    .box1{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        width: 380px;
        height: 100px;
        font-size: 17px;
    }
    .box1-1{
        padding: 18px 0;
        font-weight: bold;
        font-size: 15px;
    }
    .box2{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: start;
        width: 380px;
        height: 60px;
        padding-bottom: 30px;
    }
    .selectstyle{
        width: 350px;
        height: 40px;
        font-size: 17px;
        border: 2px solid grey;
        color: #797979;
    }

    .pricebox{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 350px;
        height: 100px;
        hr{
            width: 350px;
            border: 2px solid black;
        }

    }
    .dayBox{
        display: flex;
        flex-direction: row;
        margin-right: 5px;
    }

    .dayBtn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        font-size: 40px;
        background-color: white;
        cursor: pointer;
    }
    .dayScore{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        font-size: 25px;
        background-color: #ededed;
    }
    .priceBox{
        margin-left: 10px;
    }
    .priceInfo1{
        font-weight: bold;
        font-size: 14px;
        padding: 10px 0;
    }

    .priceInfo2{
        font-weight: bold;
        font-size: 20px;
        padding: 10px 0;
    }
    .priceInfo3{
        align-items: start;
        font-weight: bold;
        height: 70px;
        padding-left: 10px;
        font-size: 19px;
    }
    .priceInfo4{
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 80px;
        font-weight: bold;
        padding-right: 10px;
        font-size: 20px;
    }
    .priceBtn{
        border: 1px solid black;
        width: 170px;
        height: 50px;
        background-color: #1c1c1c;
        color:white;
        font-weight: bold;
        font-size: 17px;
        cursor: pointer;
    }
`;

const Goodsprice = ( props )=>{
    const { title ,item_num , i_date , price } =props;
    const[personnel,setPersonnel] =useState(0);
    const[selected,setSelected] =useState(0);
    const[resultMoney,setResultMoney] =useState(0);
    const navigate =useNavigate();
    
    const plusClick =({price})=>{
        setPersonnel(personnel+1);
        setResultMoney(price * (personnel+1));
        
    }
    const minusClick =({price})=>{
        if(personnel>0) setPersonnel(personnel-1);
        setResultMoney(price  * (personnel));
    }
    // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 선생님한테 물어봐야지 
    
    const price1 = price
    const resultMoney1 = resultMoney

    const sellClick=()=>{
        if(window.localStorage.getItem("isLogin") === "true"){
            if(personnel !== 0){
                window.localStorage.setItem("price",resultMoney);
            window.localStorage.setItem("person",personnel);
            window.localStorage.setItem("select",selected);
            window.localStorage.setItem("date",i_date);
            window.localStorage.setItem("title",title);
            navigate("/Goods/sell");
            } else alert("몇명인지 선택해라!!!")
        }else navigate("/login") // 모델창해야함
            //모달창 + 해야함 
    }
    const handleSelect = (e) => {
        setSelected(e.target.value);
      };

    return(
        <>
        <Container>
            <div className="box1">
                <p className="box1-1">상품번호  2023WDER{item_num} </p>
                <p className="box1-1">시작 일정 : {i_date}</p>
            </div>
            <div className="box2">
            <select className="selectstyle" onChange={handleSelect} value={selected} name="일정" >
                <option style={{backgroundColor:"black"}} value="">여행일정 선택</option>
                <option value="1">1일</option>
                <option value="2">2일</option>
                <option value="3">3일</option>
                <option value="4">4일</option>
                <option value="5">5일</option>
                <option value="6">6일</option>
                <option value="7">7일</option>
                <option value="8">8일</option>
            </select>
            </div>
            <div className="pricebox">
                <div className="priceBox">
                    <p className="priceInfo1">성인</p>
                    <p className="priceInfo2">{price1}원</p>
                </div>
                <div className="dayBox">
                    <button className="dayBtn" onClick={()=>minusClick({price})} >-</button>
                    <span className="dayScore">{personnel}</span>
                    <button className="dayBtn" onClick={()=>plusClick({price})}>+</button>
                </div>
            </div>
            <div className="pricebox">
            <div className="priceBox">
                    <p className="priceInfo1">아동 ❌(<span style={{color:"red"}}>준비중</span>)</p>
                    <p className="priceInfo2">{price1}원</p>
                </div>
                <div className="dayBox">
                    <button style={{color:"gray"}} className="dayBtn">-</button>
                    <span style={{color:"gray"}} className="dayScore">0</span>  
                    <button style={{color:"gray"}} className="dayBtn">+</button>
                </div>
            </div>
            <div className="pricebox">
            <div className="priceBox">
                    <p className="priceInfo1">유아 ❌(<span style={{color:"red"}}>준비중</span>) </p>
                    <p className="priceInfo2">{price1}원</p>
                </div>
                <div className="dayBox">
                    <button style={{color:"gray"}} className="dayBtn" >-</button>
                    <span style={{color:"gray"}}  className="dayScore">0</span>
                    <button style={{color:"gray"}} className="dayBtn" >+</button>
                </div>
            </div>
            <hr/>
            <div className="pricebox">
                <div className="priceInfo3">최종합계금액</div>
                <div className="priceInfo4">{resultMoney1}원 /부가세포함</div>
            </div>
            <hr/>
            <div className="pricebox">
                <button className="priceBtn" onClick={sellClick} >결 제 하 기</button>
                <button className="priceBtn">장 바 구 니</button>
            </div>
        </Container>
        </>
    )
};


export default Goodsprice;