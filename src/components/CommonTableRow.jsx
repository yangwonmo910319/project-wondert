import React from 'react';
import { useNavigate } from "react-router-dom";


const CommonTableRow = ({ children }) => {
  const navigate = useNavigate();
  return (
    <tr className="common-table-row" onClick={()=>navigate("/Diypage/DiyView")}>
      {
        children
      }
    </tr>
  )
}

export default CommonTableRow;