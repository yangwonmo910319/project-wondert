import styled,{css} from "styled-components";

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 100px;
    margin-top: 50px;
    border-bottom: 2px solid grey;
    h1{
        font-size: 20px;
        font-weight: bold;
    }
    h2{
        display: flex;
        align-items: center;
        padding-top: 20px;
        font-size: 15px;
        font-weight: bold;
    }
    h3{
        font-size: 12px;
        font-weight: 500;
        padding-left:20px ;
    }
`;

const SurveBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 170px;
    padding: 20px 0;
    border-bottom: 1px solid grey;
    h1{

    }
    h2{
        display: flex;
        align-items: center;
        justify-content: start;
        margin: 5px;
    }
    h3{
        padding-left: 10px;
        font-size: 14px;
        
    }
`;

const CheckBox = styled.input`
    appearance: none;
    width: ${(props) => (!props.checked1 ? "1.5em" : "1.0em")};
    height: ${(props) => (!props.checked1 ? "1.5em" : "1.0em")};
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;
    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: ${(props) => (!props.checked1 ? "rgb(104, 208, 118)" : "rgb(253, 241, 147)")};
    }
`;

const Goodssell2=()=>{
    

    return(
        <>
        <TitleBox>
        <h1>약관동의</h1>
        <h2><CheckBox type="checkbox" checked1={false} id="" />약관 전체 동의 <h3>약관 전문을 모두 확인 하셔야 예약이 완료됩니다.</h3></h2>
        </TitleBox>
        <SurveBox>
        <h2><CheckBox type="checkbox" checked1={true} name="" id="" /><h3>특별약관 설명 및 확인 <span style={{color:"red"}}>(필수)</span></h3></h2>
        <h2><CheckBox type="checkbox" checked1={true} name="" id="" /><h3>약관동의 <span style={{color:"red"}}>(필수)</span></h3></h2>
        <h2><CheckBox type="checkbox" checked1={true} name="" id="" /><h3>개인정보 <span style={{color:"red"}}>(필수)</span></h3></h2>
        <h2><CheckBox type="checkbox" checked1={true} name="" id="" /><h3>개인정보 3자제공 <span style={{color:"red"}}>(필수)</span></h3></h2>
        <h2><CheckBox type="checkbox" checked1={true} name="" id="" /><h3>고유식별정보 수집안내 <span style={{color:"red"}}>(필수)</span></h3></h2>
        </SurveBox>
        </>
    )
};


export default Goodssell2;