// import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    background:  radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
    border: 0; 
    color: #fff; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: #B8161F;
        color: #fff; 
        outline: 0; 
        transition: background-color 2s ease-out; 
    }
    
`; 

export default StyledButton