/*인천 페이지 */
import styled ,{ css } from "styled-components";
import GlobalButton from "../../components/GlobalButton";
import Goodsbox from "../../components/goods/Goodsbox";
import ImgSlide from "../../components/goods/imgslide";
import Goodstitle from "../../components/goods/Goodstitle";
import Goodsimgslide from "../../components/goods/Goodsimgslide";
import Goodsinfo from "../../components/goods/Goodsinfo";
import Goodsinfoheader from "../../components/goods/Goodsinfoheader";
import Goodsinfos from "../../components/goods/Goodsinfos";
import Goodsprice from "../../components/goods/Goodsprice";

const Center = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
        <Center>
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