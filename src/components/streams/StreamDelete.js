import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'

import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {
   componentDidMount(){
     this.props.fetchStream(this.props.match.params.id)
   }

   renderActions () {
    const { id }  = this.props.match.params
    return (
      <React.Fragment>
        <button onClick={() => this.onDeleteConfirm(id)} className='ui button negative'>Delete</button>
        <Link to='/' className='ui button'>Cancel</Link>
      </React.Fragment>
    )
   }

   onDeleteConfirm = (id) => {
      this.props.deleteStream(id)
   }

  render(){
    return (
      <div>StreamDelete
        <Modal
          title='Delete Stream'
          content={`Are you sure you want to delete '${this.props.stream && this.props.stream.title}'?`}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
