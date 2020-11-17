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

    render() {
        return(
            <p>Carousel works!</p>
        )
    }

}

export default Carousel