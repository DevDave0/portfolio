import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../components/Card'
import obsido from '../assets/images/Obsido.png'
import venividivici from '../assets/images/VENIVIDIVICI.png'
import petgram from '../assets/images/petgram.png'

class Carousel extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Obsido',
                    subTitle: 'Budgeting Web Application',
                    imgSrc: obsido,
                    link: 'https://github.com/DevDave0/obsido-frontend',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Veni Vidi Vici',
                    subTitle: 'Task Management Application',
                    imgSrc: venividivici,
                    link: 'https://github.com/DevDave0/Veni-Vidi-Vici-client',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Petgram',
                    subTitle: 'Social Media application for your pets',
                    imgSrc: petgram,
                    link: 'https://github.com/DevDave0/petgram-frontend',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }



    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel