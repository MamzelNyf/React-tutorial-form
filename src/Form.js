import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name:'',
            job: '',
        };

        this.state = this.initialState
        //update the state of Form every time a field is changed in the form, and when we submit, 
        //all that data will pass to the App state, which will then update the Table.
    }

    handleChange = event => {
        const {name, value } = event.target 

        this.setState({
            [name]: value,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        //pass the Form state through as the character parameter we defined earlier
        this.setState(this.initialState)
        //reset the state to the initial state, to clear the form after submit.
    }

    render(){
        const {name, job} = this.state;

        return(
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
                {/* using an onClick instead of an onSubmit since we're not using the standard submit functionality. The click will call the submitForm */}
            </form>
        );
    }
}

    export default Form;
