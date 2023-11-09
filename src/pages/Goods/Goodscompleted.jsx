import styled from "styled-components"
import Goodsclt1 from "../../components/goods/Goodsclt1";

const Center = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Goodscompleted=()=>{


    return(
        <>
        <Center>
        <Goodsclt1/>
        </Center>
        </>
    )
}

export default Goodscompleted;