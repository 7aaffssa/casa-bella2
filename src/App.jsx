import React from "react"
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom"
import Home from "../src/components/home/Home"
import Header from "../src/components/common/header/Header"
// import Footer from "../src/components/common/footer/Footer"
import About from "../src/components/about/About"
import Pricing from "../src/components/pricing/Pricing"
import Team from "../src/components/team/Team"
import Services from "../src/components/services/Services"
import Contact from "../src/components/contact/Contact"
import Login from "../src/components/login/Login";
import "./App.css"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route path="*" component={Home} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default Pages

