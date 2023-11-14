
import styled from "styled-components"
import { Container,Hint,Items,Input,Button} from "../../pages/TestCss"; // TestCss 파일에서 Css1을 export하고 있음


const IdCheck =({inputId,onChangeId})=>{
    return(
        <Items className="item2">
        <Input placeholder="아이디" value={inputId} onChange={onChangeId} />
      </Items>
        
    )
}
export default IdCheck