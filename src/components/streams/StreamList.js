import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount () {
    this.props.fetchStreams()
  }

  renderAmdinButtons (stream) {
    const owner = stream.userId && stream.userId === this.props.currentUserId
    if (owner) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>Delete</Link>
        </div>
      )
    }
  }

  renderList () {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          { this.renderAmdinButtons(stream) }
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreateButton () {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/streams/new' className='ui button primary'>
                        Create Stream
          </Link>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{ this.renderList() }</div>
        { this.renderCreateButton() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    streams: Object.values(state.streams)
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
