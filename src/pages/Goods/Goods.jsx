/*인천 페이지 */
import styled ,{ css } from "styled-components";
import GlobalButton from "../../components/GlobalButton";
import Goodsbox from "../../components/goods/Goodsbox";
import ImgSlide from "../../components/goods/imgslide";


const Center = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0;
`;
const Between =styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Goods = () =>{
    return(
        <>
        <Center style={{justifyContent:"end", alignItems:"row"}}>
            <GlobalButton/>     
        </Center>
        <Center>
            <ImgSlide/>
        </Center>
        <Center>
            <Goodsbox/>
        </Center>
        </>
    )
}


export default Goods;