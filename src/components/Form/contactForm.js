import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

//import components
import Form from '../Styled/Form'
import Label from '../Styled/Label'
import StyledButton from '../Styled/Button'
import Input from '../Styled/Input'
import Textarea from '../Styled/Textarea'

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;



const ContactForm = () => (
    <div>
        <h3>Email Us</h3>   
        <Form method="post"
      action="https://www.flexyform.com/f/ed4d78a0977d67cd509b9cf6d83ff731026788a2">
            <WrapperGrid>
                <Label>Name</Label>
                <Input type="text" name="name" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Company</Label>
                <Input type="text" name="company" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Email Address</Label>
                <Input type="email" name="email" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Phone Number</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid full>
                <Label>Message</Label>
                <Textarea name="message" rows="5"></Textarea>
            </WrapperGrid>
            <WrapperGrid full>
                <StyledButton>Submit</StyledButton>
            </WrapperGrid>
        </Form>
    </div>
)

export default ContactForm