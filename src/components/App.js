import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamShow from './streams/StreamShow'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'

import history from '../history'

const App = (props) => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          {/* {Switch makes sure only the first matching route renders e.g. /streams/new;
          withouch 'Switch' /streams/:id will be rendered too */}
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/admin/streams' exact component={StreamShow} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit/:id' exact component={StreamEdit} />
            <Route path='/streams/:id' exact component={StreamShow} />
            <Route path='/streams/delete/:id' exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
