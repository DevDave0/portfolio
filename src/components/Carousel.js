import React from 'react';


class Carousel extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Test',
                    subTitle: 'this is a test',
                    imgSrc: 'source',
                    link: 'example.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Test',
                    subTitle: 'this is a test',
                    imgSrc: 'source',
                    link: 'example.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Test',
                    subTitle: 'this is a test',
                    imgSrc: 'source',
                    link: 'example.com',
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

    

    render() {
        return(
            <p>Carousel works!</p>
        )
    }

}

export default Carousel