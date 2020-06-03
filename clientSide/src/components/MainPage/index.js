import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoggedInInfo from '../SideComponent/LoggedInInfo';
import MainMenu from '../SideComponent/MainMenu';
import MessageNotifications from '../MessageNotifications';
import {loadUser} from "../../actions/authActions";
import NavBarr from './NavBar';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';


class MainPage extends Component{

  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
    console.log(this.props.isLoading);
    //this.props.loadUser();
  }

  // componentDidMount(){
  //   console.log("MainPage mounted");
  //   if( !this.props.isAuthenticated ){
  //     window.location = "/login";
  //   }
  // }

  componentDidUpdate(){
    console.log("MainPage updated");
  }
 
  render() {
    return (
         <div className="container-fluid p-0 m-0">
            <NavBarr></NavBarr>
             <div className="row">
                 <div className="col-2 p-0 m-0 bgColor">
                   
                   {/* <br></br>
                   <LoggedInInfo userType="Mesues" userName = "Skerd" userSurname = "Xhafa"></LoggedInInfo>
                   <br></br>
                   <MainMenu></MainMenu>
                   <br></br>
                   <MessageNotifications></MessageNotifications>*/}
                 </div> 
             </div>
         </div>
    );
  }


}

MainPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool
}

const mapStateToProps = (state) =>({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, {loadUser})(MainPage);

