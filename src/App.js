import React, { Component } from 'react'

export class App extends Component {
  state={
    FullName : 'henidahmen',
    Bio  : 'from sfax ',
    imageSrc:
    "https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg",
    Profession : 'web developper',
    show:false,
    count:0
  }
  handleShow = () => {
    this.setState({ show:!this.state.show  });
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ count:this.state.count+1  });
    }, 1000);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleShow}>show</button>
        {
          this.state.show ? 
          <div>
            <h1>{this.state.count}</h1>
            <h3>{this.state.FullName}</h3>
            <p>{this.state.Bio}</p>
            <p>{this.state.Profession}</p>
            <img src={this.state.imageSrc} alt=""/>
          </div> : null
        }
        
      </div>
    )
  }
}

export default App

