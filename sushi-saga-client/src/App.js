import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    sushiPage: 1
  }

  componentDidMount() {
    this.getSushi();

    setTimeout(() => {
      this.provideSushi()
      
    }, 1000);
  }

  getSushi = async() => {
    const sushi = await (await fetch(API)).json();
    this.setState({ sushi });
  }


  provideSushi = () => {
    const { sushiPage } = this.state;
    const lowRange = ((sushiPage * 4 ) - 4 )
    const highRange = (sushiPage * 4) 
    return this.state.sushi.filter(sushi => sushi.id > lowRange && sushi.id < highRange)
  }

  render() {
    const { sushi, sushiPage } = this.state;
    return (
      <div className="app">
        <SushiContainer sushi={ sushi } sushiPage={ sushiPage }/>
        <Table />
      </div>
    );
  }
}

export default App;