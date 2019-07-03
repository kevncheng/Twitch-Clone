import React from 'react';
import { reduxForm, Field } from 'redux-form';


class StreamForm extends React.Component {
    renderError = ({error, touched}) => {
        if(touched && error){
            return (
                <div className = 'ui error message'>
                    <div className = 'header'>{error}</div>
                </div>
                )
        }
    }
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched? 'error' : ''}`
        return (
            <div className = {className} >
            <label>{label}</label>
            <input {...input} autoComplete = 'off'/>
            {this.renderError(meta)}
            </div>
            );
    };

    onSubmit =  (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form className = 'ui form error' onSubmit = {this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label = 'Name'/>
                <Field name='description' component={this.renderInput} label = 'Desscription'/>
                <button className = 'ui button primary'>Submit</button>
            </form>
        );
    }
}

const validate = formValue => {
    const error = {}
    if(!formValue.title){
        error.title = 'You must enter a title'
    }
    if(!formValue.description){
        error.description = 'You must enter a description'
    }
    return error;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

