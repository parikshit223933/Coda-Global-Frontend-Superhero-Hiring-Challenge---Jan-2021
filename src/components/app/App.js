import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Better from '../MockupPage1/Better'
import Results from '../MockupPage2/Results'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Better} />
                        <Route exact path="/results" component={Results} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
