import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput(formProps) {
        return(
            // <input 
            //     value={formProps.input.value}
            //     onChange={formProps.input.onChange}
            // />

            <input { ...formProps.input } /> //short way of doing the above per docs

            // below is very most concise way to write this method
        );
    }

    // renderInput({ input }){
    //     return <input {...input} />
    // }

    render() {
        return(
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);