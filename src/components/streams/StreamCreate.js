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

    onSubmit(formValues){

    }

    render() {
        return(
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const fields = ['title', 'description']; // field names need to match form field name 
        const errors = {};

        fields.forEach( field => {
            if (!formValues[field]) {
                errors[field] = `You must enter a ${field}`;
            }
        })
    
        return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate

})(StreamCreate);