import React, { useState } from 'react';

import ChildComponent from '../components/Userinfo/IdCheck';
import MO from "../components/Userinfo/ModalTest2";
import Add from "../components/Userinfo/PopupAddr";
function Test() {
  const [childValue, setChildValue] = useState('');

  const chageId = (value) => {
    setChildValue(value);
  };
  return (
  
     <><MO></MO>
     
     <Add></Add>
     </>
  );
};

export default Test;