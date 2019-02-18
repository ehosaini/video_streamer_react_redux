import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    // renderInput(formProps) {
    //     return(
    //         // <input // --------------- tie only select input properties
    //         //     value={formProps.input.value}
    //         //     onChange={formProps.input.onChange}
    //         // />

    //         // <input { ...formProps.input } /> // ---------------- tie all the input properties
    //     );
    // }

    renderInput({ input, label }){ // above is a more verbose way of achieving this - note how input can be returned
        return (
            <div className="field">
                <label>{ label }</label>
                <input {...input} />
            </div>
        );
        
    }  

    render() {
        return(
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description" />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);