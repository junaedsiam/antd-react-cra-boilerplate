import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Button } from 'antd'
import './App.less'
import Home from 'component/page/home'
import About from 'component/page/about'
import Notfound from 'component/page/notFound'
import Navbar from 'component/layout/nav'

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="*">
                    <Notfound />
                </Route>
            </Switch>
        </div>
    </Router>
)

export default App
