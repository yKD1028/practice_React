import React from 'react'
import Header from './components/header/Header'
import Home from './components/main/Home'
import Gallery from './components/main/Gallery'
import About from './components/main/About'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App

