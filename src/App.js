import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import HomeContainer from './Main.js'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Welcome</h2>
    <HomeContainer />
  </div>
)

export default App
