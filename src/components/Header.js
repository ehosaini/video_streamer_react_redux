import React from 'react'
import { Link } from 'react-router-dom'

import GoogleOAuth from './GoogleOAuth'

const Header = (props) => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/'>
                Streamer
      </Link>
      <div className='right menu'>
        <Link to='/'>
                    All Streams
        </Link>
        <GoogleOAuth />
      </div>
    </div>
  )
}

export default Header
