import React from 'react'
import styled from 'styled-components'


const WrapperCompanyInfo=styled.div`
    background:  radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
`; 

const CompanyName = styled.h3`
    margin: 0 0 1rem 0;
    text-align: center;
    color: #fff; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`;

const WrapperList = styled.ul`
    list-style: none;
    margin:0 0 1rem 0;
    padding:0;
    text-align: center;
    @media (min-width: 700px) {
        text-align: left; 
    }
`;


const CompanyInfo = () => (
    <WrapperCompanyInfo>
        <CompanyName>The House of Spices</CompanyName>
        <WrapperList>
            <li>Hassan rue patrice Le mumba , Rabat</li>
            <li>+212 771828450</li>
            <li>az.othmann@gmail.com</li>
        </WrapperList>
    </WrapperCompanyInfo>
)

export default CompanyInfo