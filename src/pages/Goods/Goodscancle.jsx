import styled,{css} from "styled-components";
import Goodscancle1 from "../../components/goods/Goodscancle1";



const Center = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Goodscancle=()=>{


    return(
        <>
        <Center>
            <Goodscancle1/>
        </Center>
        </>
    )
};


export default Goodscancle;