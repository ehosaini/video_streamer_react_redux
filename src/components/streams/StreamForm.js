import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    // renderInput(formProps) {
    //     return(
    //         // <input // --------------- tie only select input properties
    //         //     value={formProps.input.value}
    //         //     onChange={formProps.input.onChange}
    //         // />

    //         // <input { ...formProps.input } /> // ---------------- tie all the input properties
    //     );
    // }

    renderError({ error, touched }) {
        if(error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{ error }</div>
                </div>
            );
        }
    }
    
    renderInput = ({ input, label, meta }) => { // above is a more verbose way of achieving this - note how input can be returned
        return (
            <div className="field">
                <label>{ label }</label>
                <input {...input} />
                { this.renderError(meta) }
            </div>
        );   
    }  

    onSubmit = (formValues) => {
        this.props.submitForm(formValues);
    }

    render() {
        return(
            // handleSumbit in "this.props.handleSubmit(this.onSubmit)" is provided by Redux form
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}> 
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
    form: 'streamForm',
    validate
})(StreamForm);