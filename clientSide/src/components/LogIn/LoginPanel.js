import React, {Component} from 'react';

import {connect } from 'react-redux';
import {tryToLogInUser} from '../../actions/loginAction';
import PropTypes from 'prop-types';

import Modal from "../Modals/Modal";

class LoginPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
          spinning: "invisible",
          notSpinning: "visible",
          showModal : false,
          modalInfo : {
              title: "",
              body: ""
          },
          passwordType : "password",
          passwordButton : "btn btn-outline-warning",

        };
        this.tryToLogIn = this.tryToLogIn.bind(this);
        this.toggleSpin = this.toggleSpin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.editModal = this.editModal.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
    }

    componentDidMount(){
        console.log("LoginPanel mounted");     
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal});
    }

    editModal(e){
        var whatModal = e.target.id;

        if( whatModal === "resetPassword"){
            this.setState({modalInfo:{ title: "Keni harruar fjalekalimin?", body: "Ju lutem kontaktoni sekretarine e institucionit ne te cilin punoni. Faleminderit."}})
        }
        else if( whatModal === "resetEmail"){
            this.setState({modalInfo:{ title: "Keni harruar email-in?", body: "Ju lutem kontaktoni sekretarine e institucionit ne te cilin punoni. Faleminderit."}})
        }
        this.toggleModal();
    }

    toggleSpin(){
        console.log("Starting Spin");

        if( this.state.spinning === "invisible"){
            this.setState({spinning : "visible"});
            this.setState({notSpinning : "invisible"});
        }
        else{
            this.setState({spinning : "invisible"});
            this.setState({notSpinning : "visible"});
        }
    }

    tryToLogIn(e) {
        e.preventDefault();
        console.log('Trying to log in now...');
        this.toggleSpin();

        this.props.tryToLogInUser();
        
    }

    togglePassword(e){

        if( this.state.passwordType === "password"){
            this.setState({passwordType : "text"});
            this.setState({passwordButton : "btn btn-outline-success"});
            e.target.innerText = "Fshihe";
        }
        else{
            this.setState({passwordType : "password"});
            this.setState({passwordButton : "btn btn-outline-warning"});
            e.target.innerText = "Shiko";
        }

    }


    render(){
        return (
            <div className="container-fluid mt-5" >

                <form onSubmit={this.tryToLogIn}>
                    <label >Adresa E-mail</label>
                    <input type="text" className="form-control" name="loginEmail" placeholder="Vendosni email-in" required />
                
                    <br/>
                    <div> {this.state.loginResponse} </div>

                    <label>Fjalëkalimi</label>
                    <div className="input-group">
                        <input type={this.state.passwordType} className="form-control" name="loginPassword" placeholder="Vendosni fjalëkalimin" required/>
                        <button id="showHideButton" value="show" type="button" className={this.state.passwordButton} onClick={this.togglePassword}>
                            Shiko
                        </button>     
                    </div>

                    <br/>
                   

                    <div className="text-center">
                        <div>
                            <div id="spinnerDiv" className={this.state.spinning} style={{"height": "0px"}}>
                                <div className="spinner-border text-success m-auto" onClick={this.toggleSpin}></div>
                            </div>
                            <button type="submit" value="Submit" className={"btn btn-outline-success m-auto " + this.state.notSpinning}>
                                Kycuni
                            </button>
                        </div>
                        <div>
                            <a href="#" className="form-text text-muted">
                                <small id="resetPassword" onClick={this.editModal}>Keni harruar fjalëkalimin?</small>
                            </a>
                            <a href="#" className="form-text text-muted">
                                <small id="resetEmail" onClick={this.editModal}>Keni harruar email-in?</small>
                            </a>
                        </div>
                    </div>

                </form>

                <Modal show={this.state.showModal} handleClose={this.toggleModal} modalInfo={this.state.modalInfo} ></Modal>
            </div>
        )
    }
    

}


LoginPanel.propTypes = {
    tryToLogInUser: PropTypes.func.isRequired,
    loginResponse: PropTypes.object
}

const mapStateToProps = (state) => ({
    //state "reducer name from main reducer"
    loginResponse: state.logIn //we map a reducer to a state property
});


export default connect( mapStateToProps, { tryToLogInUser } )(LoginPanel);
            //    connect( mapStateToProps, { tryToLogInUser } )(LoginPanel)