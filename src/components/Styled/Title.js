import React from 'react'
import styled from 'styled-components'

const Title = ({ className, text }) => (
    <h1 className={className}>{ text }</h1>
)

const StyledTitle = styled(Title)`
    color:  radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
    font: 70px; 
    text-align: center; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`; 

export default StyledTitle