import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'David Chung',
      headerLinks: [
        {title: "Home", path: '/'},
        {title: "About", path: '/about'},
        {title: "Contact", path: '/contact'},
      ],
      home: {
        title: 'Resilient',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: "Let's Connect!"
      }
    }
  }

  render(){
    return (
      <div>David Chung</div>
    )
  }
}

export default App;
