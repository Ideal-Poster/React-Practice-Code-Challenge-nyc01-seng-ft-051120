import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    sushiPage: 4,
    paginatedSushi: []
  }

  componentDidMount() {
    this.getSushi();
  }

  getSushi = async () => {
    const sushi = await (await fetch(API)).json();
    this.setState({ sushi }, () => this.provideSushi(this.state.sushiPage));
  }

  provideSushi = page => {
    const lowRange = ((page * 4 ) - 4 )
    const highRange = ((page * 4)) 
    const sushi = this.state.sushi.filter(sushi => sushi.id > lowRange && sushi.id <= highRange)
    this.setState({ paginatedSushi: sushi })
  }

  nextSushiPage = () => {
    this.setState(
      { sushiPage: (this.state.sushiPage + 1)  },
      () => this.provideSushi(this.state.sushiPage)
    )
  }

  render() {
    const { sushiPage, paginatedSushi } = this.state;
    return (
      <div className="app">
        <SushiContainer nextSushi={ this.nextSushiPage } sushi={ paginatedSushi } sushiPage={ sushiPage }/>
        <Table />
      </div>
    );
  }
}

export default App;