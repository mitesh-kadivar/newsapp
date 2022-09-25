import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API_URL
  const [progress, setProgress] = useState(0)

  // state = {
  //   progress:0
  // }

  // setProgress = (progress) => {
  //   setState({progress: progress})
  // }

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        {/* <News setProgress={setProgress}  pageSize={pageSize} country="in" category={category} apiKey={apiKey} /> */}

        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' apiKey={apiKey} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category='business' apiKey={apiKey} /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category='entertainment' apiKey={apiKey} /></Route>
          <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' apiKey={apiKey} /></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category='health' apiKey={apiKey} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category='science' apiKey={apiKey} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category='sports' apiKey={apiKey} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category='technology' apiKey={apiKey} /></Route>
        </Switch>

        {/* REACT_APP_NEWS_API_URL=f1081682e6cc4e0cbbdfba0768223891 */}
      </Router>
      </div>
    )
}

export default App;