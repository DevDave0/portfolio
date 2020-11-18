import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Content from '../components/Content';
import Hero from '../components/Hero';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
        }
    }
    


    render() {

        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlfor='full-name'>Full Name</Form.Label>
                            <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlfor='email'>Email</Form.Label>
                            <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlfor='message'>Message</Form.Label>
                            <Form.Control id='message' name='message' as='textarea' rows='4' value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button>Submit</Button>
                    </Form>
                </Content>
            </div>
        )

    }
}


export default ContactPage;