import React from 'react'
import Footer from '../components/Footer'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import {Link} from 'gatsby'
import styled from 'styled-components';
export function FooterContainer() {
    const StyledLink = styled(props => <Link {...props} />)`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`;
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link ><StyledLink to ="/privacy-policy">Privacy policy</StyledLink></Footer.Link>
                    <Footer.Link ><StyledLink to ="/returns-refunds-policy">Returns and refunds</StyledLink></Footer.Link>
                    <Footer.Link ><StyledLink to ="/terms-of-use">Terms of use</StyledLink></Footer.Link>
                    <Footer.Link ><StyledLink to ="/warranty-guarantees">Warranty and guarantees</StyledLink></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link><StyledLink to ="/covid-19">COVID-19</StyledLink></Footer.Link>
                    <Footer.Link><StyledLink to ="/FAQ">FAQ</StyledLink></Footer.Link>
                  
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                <Footer.Link ><StyledLink to ="/contact-us">Contact link</StyledLink></Footer.Link>
                <Footer.Link ><StyledLink to ="/company-info">Company info</StyledLink></Footer.Link>
                <Footer.Link ><StyledLink to ="/support">Support</StyledLink></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><FaFacebook/> Facebook</Footer.Link>
                    <Footer.Link href="#"><FaInstagram/> Instagram</Footer.Link>
                    <Footer.Link href="#"><FaYoutube/> Youtube</Footer.Link>
                    <Footer.Link href="#"><FaTwitter/> Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}