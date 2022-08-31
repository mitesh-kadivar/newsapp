import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
        />
        {/* <News setProgress={this.setProgress}  pageSize={this.props.pageSize} country={this.props.country} category={this.props.category} apiKey={this.props.apiKey} /> */}

        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.props.pageSize} country={this.props.country} category='general' apiKey={this.props.apiKey} /></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.props.pageSize} country={this.props.country} category='business' apiKey={this.props.apiKey} /></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.props.pageSize} country={this.props.country} category='entertainment' apiKey={this.props.apiKey} /></Route>
          <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.props.pageSize} country={this.props.country} category='general' apiKey={this.props.apiKey} /></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.props.pageSize} country={this.props.country} category='health' apiKey={this.props.apiKey} /></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.props.pageSize} country={this.props.country} category='science' apiKey={this.props.apiKey} /></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.props.pageSize} country={this.props.country} category='sports' apiKey={this.props.apiKey} /></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.props.pageSize} country={this.props.country} category='technology' apiKey={this.props.apiKey} /></Route>
        </Switch>

        {/* REACT_APP_NEWS_API_URL=f1081682e6cc4e0cbbdfba0768223891 */}
      </Router>
      </div>
    )
  }
}
