import styled,{ css } from "styled-components";
import { useState } from "react";

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
        font-size: 20px;
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
    
    }
    
`;



const Goodsprice = ()=>{
    const[day,setDay] =useState(0);
    
    const plusClick =()=>{
        setDay(day+1);
    }
    const minusClick =()=>{
        if(day>0){setDay(day-1);}
    }



    return(
        <>
        <Container>
            <div className="box1">
                <p className="box1-1">상품번호  S20231101 </p>
                <p className="box1-1">일정 : 2023년 10월 10일 ~ 2023년 10월 15일</p>
            </div>
            <div className="box2">
            <select className="selectstyle" name="일정" id="?">
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
                    <p className="priceInfo2">7,800,000원</p>
                </div>
                <div className="dayBox">
                    <button className="dayBtn" onClick={minusClick} >-</button>
                    <span className="dayScore">{day}</span>
                    <button className="dayBtn" onClick={plusClick}>+</button>
                </div>
            </div>
            <div className="pricebox">
            <div className="priceBox">
                    <p className="priceInfo1">아동 ❌(<span style={{color:"red"}}>준비중</span>)</p>
                    <p className="priceInfo2">7,800,000원</p>
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
                    <p className="priceInfo2">7,800,000원</p>
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
                <div className="priceInfo4">0원 /유류할증포함</div>
            </div>
            <hr/>
            <div className="pricebox">
                <button className="priceBtn">결 제 하 기</button>
                <button className="priceBtn">장 바 구 니</button>
            </div>
            

        </Container>
        </>
    )
};


export default Goodsprice;