import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id) // component fetches it's own data
    }

    render(){
        return(
            <div>
                {/* stream is undefined when the component renders the first time */}
                <h2>{this.props.stream && this.props.stream.title}</h2> 
                <h2>{this.props.stream && this.props.stream.description}</h2>
            </div> 
        );
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);