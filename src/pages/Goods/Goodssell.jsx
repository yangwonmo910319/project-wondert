import styled,{css} from "styled-components";
import Goodssell1 from "../../components/goods/Goodssell1";
import Goodssell2 from "../../components/goods/Goodssell2";
import Goodssell3 from "../../components/goods/Goodssell3";

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

const Goodsell =()=>{

    


    return(<>
    <Center>
        <Goodssell1/>
        <Goodssell2/>
        <Goodssell3/>
    </Center>
    </>)
};

export default Goodsell;