import { useState, useEffect, useRef } from "react"
import { Wrapper } from '@googlemaps/react-wrapper';
import styled from "styled-components";
const GoogleMap = () => {
  // 커스텀 컴포넌트의 내용을 작성해주세요.
  return (

    <Wrapper apiKey="AIzaSyAySVaVGC3nua0gnedaSojE748USAHbXhk11" libraries={"place"} >
      <CustomComponent></CustomComponent>
    </Wrapper>
  );
};


const CustomComponent = ()=>{
    const [map, setMap] = useState(null);
    const ref = useRef();

    useEffect(()=>{
        const newMap = new window.google.maps.Map(ref.current, {
            center : { lat: 37.569227, lng: 126.9777256},
            zoom : 16,
        });     
        
        setMap(newMap);
    },[])

    return (
        <div ref={ref} id={map} style={{width:"400px", height: "400px"}}></div>
    )
};

export default GoogleMap;
