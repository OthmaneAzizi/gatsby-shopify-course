// import React from 'react';
import styled from 'styled-components'
import { css } from 'styled-components'

const Container = styled.div`
    margin-left: auto; 
    margin-right: auto;
    max-width: 1170px;  

    ${props => props.wrapper && css`
        box-shadow: 0 0 20px 0  purple;
        > * {
            padding: 1em; 
        }
        
        @media (min-width: 700px) {
            display: grid; 
            grid-template-columns: 1fr 2fr; 
            > * {
                padding: 2em; 
            }
        }
    `}
`; 

export default Container