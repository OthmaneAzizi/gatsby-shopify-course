import React, { Component } from 'react'
//import all child components
import Container from '../components/Styled/Container'
import Title from '../components/Styled/Title'
import {navigate} from '@reach/router';
import CompanyInfo from '../components/Form/companyInfo'
import {Button} from '../components/Button';


class Main extends Component {
    render () {
        return (
            <Container>
                 <div>
                    <Button onClick={()=> navigate(-1)}>
                        Back to Home page
                    </Button>
    </div>
                <Title text="Company info" />
                <Container wrapper>
                 
                    <CompanyInfo/>
                </Container>
            </Container>
        )
    }
}

export default Main