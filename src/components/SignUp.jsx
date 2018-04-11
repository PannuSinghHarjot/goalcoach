import React,{ Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp(){
        console.log('this.state', this.state);
        /*es5 syntax
        const email: this.state.email;
        const password: this.state.password;
        */
        //es6 syntax
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                //console.log('error', error);
                this.setState({error})
            })
    }

    render(){
            return(
                <div className='form-inline' style={{margin: '5%'}}>
                    <h2> Sign Up &#2676;</h2>
                    <div className="form-group"> 
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="email"
                            style={{marginRight: '5px'}}
                            onChange={event => this.setState({email: event.target.value})}
                        />
                        <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        style={{marginRight: '5px'}}
                        onChange={event => this.setState({password: event.target.value})}
                        />
                        <button 
                            className="btn btn-primary"
                            type="button"
                            onClick={() => this.signUp()}
                        >
                        Sign Up
                        </button>
                        <div> { this.state.error.message } </div>
                        <br />
                        <div><Link to={'/signin'}>Already a user? Sign In instead </Link> </div>
                    </div>
                </div>
            )
        }
}

export default SignUp;