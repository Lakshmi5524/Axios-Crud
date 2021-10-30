import React from 'react'
import './App.css';
import Read from './components/read/read'
import Create from './components/create/create'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Update from './components/update/update'
import Delete from './components/delete/delete'


function App() {
  return (

    <Router>

      <div className="main">
        <div>
          <h1>React Axios Crud Operation</h1>
        </div>
        <div>
          <Route exact path='/' component={Create} />
        </div>

        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>


        <Route path='/update' component={Update} />

      </div>
    </Router >


  )
}

export default App;
