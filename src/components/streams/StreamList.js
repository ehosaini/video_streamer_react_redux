import React from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAmdinButtons(stream) {
        const owner = stream.userId && stream.userId === this.props.currentUserId;
        if(owner) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">
                        Edit
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map( stream => {
            return(
                <div className="item" key={stream.id}>
                    { this.renderAmdinButtons(stream) } 
                    <div className="content">
                    {stream.title} 
                    <div className="description">{stream.description}</div>
                    </div>      
                </div> 
            );
        });
    }

    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{ this.renderList() }</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        currentUserId: state.auth.userId,
        streams: Object.values(state.streams) 
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);