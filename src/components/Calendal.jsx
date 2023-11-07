import React from "react";
import styled from "styled-components";

const Date = styled.div`
    label {
        display: block;
        font:
            1rem 'Fira Sans',
            sans-serif;
    }

    input,label {
        margin: 0.4rem 0;
    }
`;

const Calendal = () => {

    return(
        <Date>
            <label for="start">Start date:</label>
            <input type="date" id="start" name="trip-start" value="2023-11-07"/>
            <label for="end">End date:</label>
            <input type="date" id="end" name="trip-start" value="2023-11-07"/>
        </Date>
    );
};
export default Calendal;