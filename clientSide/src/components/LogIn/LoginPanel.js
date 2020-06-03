import React, {Component} from 'react';
import {connect } from 'react-redux';
import {Spinner, Button, Label, Input, InputGroup, Form, Container } from 'reactstrap';
import {loginUser} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import PropTypes from 'prop-types';
import ForgetCredentials from './ForgetCredentials';


class LoginPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            passwordType : "password",
            passwordButton : "warning",
            password: null,
            email: null,
        };
        this.tryToLogIn = this.tryToLogIn.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    componentDidMount(){
        console.log("LoginPanel mounted");     
        const {email, password} = this.state;
        const user = {
            name : email,
            password
        }
        this.props.loginUser(user);
    }

    tryToLogIn(e) {
        e.preventDefault();

        console.log('Trying to log in now...');
        const {email, password} = this.state;
        const user = {
            name : email,
            password
        }
        this.props.loginUser(user);
    }

    togglePassword(e){

        if( this.state.passwordType === "password"){
            this.setState({passwordType : "text"});
            this.setState({passwordButton : "success"});
            e.target.innerText = "Fshihe";
        }
        else{
            this.setState({passwordType : "password"});
            this.setState({passwordButton : "warning"});
            e.target.innerText = "Shiko";
        }

    }

    componentDidUpdate(){
        // console.log("LoginPanel updated");
        if( this.props.isAuthenticated){
            console.log("LOGIN SUCCESSFULL");
            if( this.props.error.msg ){
                this.props.clearErrors();
            }
            window.location = "/home";
        }
    }

    render(){
        return (
            <Container className="mt-5">

                {/* {this.props.error.msg ? <Alert color="danger">{this.props.error.msg}</Alert> : null} */}
                <Form onSubmit={this.tryToLogIn}>
                    <Label >Adresa E-mail</Label>
                    <Input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Vendosni email-in"  
                        onChange={this.handleInputChange}
                        required
                        />
                    <br/>
                    
                    <Label>Fjalëkalimi</Label>
                    <InputGroup>
                        <Input 
                            type={this.state.passwordType} 
                            id="password" 
                            name="password" 
                            placeholder="Vendosni fjalëkalimin" 
                            onChange={this.handleInputChange}
                            required
                            />
                        <Button value="show" outline color={this.state.passwordButton} onClick={this.togglePassword}>
                            Shiko
                        </Button>     
                    </InputGroup>

                    <br/>
                   
                    <div className="text-center">
                        <div style={{"height": "0px"}}>
                            <Spinner className={!this.props.isLoading ? "invisible": null } color="success" />
                        </div>
                        <Button type="submit" className={this.props.isLoading ? "invisible": null } outline color="success" >
                            Kyçuni
                        </Button>

                        <ForgetCredentials></ForgetCredentials>
                        
                    </div>
                </Form>

            </Container>
        )
    }
}


LoginPanel.propTypes = {
    loginUser: PropTypes.func,
    clearErrors: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object,
    isLoading: PropTypes.bool
}

const mapStateToProps = (state) => ({
    //state "reducer name from main reducer"
    //we map a reducer to a state property
    loginResponse: state.logIn, 
    isAuthenticated : state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    error: state.error.msg
});


export default connect( mapStateToProps, { loginUser, clearErrors } )(LoginPanel);