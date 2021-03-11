import React from 'react'
import Header from './components/header/Header'
import Home from './components/main/Home'
import Museum from './components/main/Museum'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/museum" component={Museum} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App

