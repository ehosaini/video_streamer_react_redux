import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id) // component fetches it's own data
    }

    onSubmit = (formValues) => {
        this.props.updateStream(this.props.match.params.id, formValues);
    }

    render(){
        return(
            <div>
                <h2>Update a Stream</h2> 
                {/* initialValues attribute is a redux form feature that prepopulates a form with data */}
                <StreamForm initialValues={this.props.stream} submitForm={this.onSubmit}/>
            </div> 
        );
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, updateStream })(StreamEdit);