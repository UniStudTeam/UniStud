import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoggedInInfo from '../SideComponent/LoggedInInfo';
import MainMenu from '../SideComponent/MainMenu';
import MessageNotifications from '../MessageNotifications';


class MainPage extends Component{

  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    console.log("MainPage mounted");
  }

  componentDidUpdate(){
    console.log("MainPage updated");
  }
 
  render() {
    return (
         <div className="container-fluid">
             <div className="row">
                 <div className="col-2 p-0 m-0 bgColor">
                   <br></br>
                   <LoggedInInfo userType="Mesues" userName = "Skerd" userSurname = "Xhafa"></LoggedInInfo>
                   <br></br>
                   <MainMenu></MainMenu>
                   <br></br>
                   <MessageNotifications></MessageNotifications>
                 </div>
             </div>
         </div>
    );
  }


}

export default MainPage;

