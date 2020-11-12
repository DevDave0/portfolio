import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'David Chung'
    }
  }

  render(){
    return (
      <div>David Chung</div>
    )
  }
}

export default App;
