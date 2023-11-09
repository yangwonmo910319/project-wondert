import React, { useState } from 'react';

import ChildComponent from '../components/Userinfo/IdCheck';

function Test() {
  const [childValue, setChildValue] = useState('');

  const chageId = (value) => {
    setChildValue(value);
  };
  return (
    // <div>
    //   <button onClick={openModal}>Open Modal</button>

    //   {/* 모달이 열려있을 때만 렌더링 */}
    //   {isModalOpen && (
    //     <Modal onClose={closeModal} onConfirm={handleConfirm} />
    //   )}

    //   {/* 입력된 데이터 표시 */}
    //   {inputData && <p>Input Data: {inputData}</p>}
    // </div>



    // <div>
    //   부모 출력
    //   <p>Child Value: {childValue}</p>
    //   <ChildComponent onValueChange={chageId} asd={true}/>
    // </div>
     <></>
  );
};

export default Test;