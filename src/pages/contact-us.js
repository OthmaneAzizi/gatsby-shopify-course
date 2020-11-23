import React, { Component } from 'react'
//import all child components
import Container from '../components/Styled/Container'
import Title from '../components/Styled/Title'
import {navigate} from '@reach/router';

import {Button} from '../components/Button';
import ContactForm from '../components/Form/contactForm'



class Main extends Component {
    render () {
        return (
            <Container>
                
                 <div>
                    <Button onClick={()=> navigate(-1)}>
                        Back to Home page
                    </Button>
    </div>
                <Title text="Contact Us" />
                <Container wrapper>
                 
                    <ContactForm/>
                </Container>
            </Container>
        )
    }
}

export default Main