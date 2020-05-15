import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoggedInInfo from './components/SideComponent/LoggedInInfo';
import MainMenu from './components/SideComponent/MainMenu';
import MessageNotifications from './components/MessageNotifications';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }

 
  render() {
    return (
        <div className="container-fluid ">
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



// function App() {
//   return (
//     <Provider store={ReduxStore}>
//           <Container fluid style={{border: "2px solid red"}}>
//               <Row>
//                   <Col xs="1" md="2" style={{border: "2px solid blue"}}> 
//                     sidemenu
//                   </Col>

//                   <Col xs="11" md="10" style={{border: "2px solid yellow"}}>
//                     <Row>
//                       <Col xs="12" md="8" style={{border: "2px solid magenta"}}>
//                         Main Content
//                         <Row>
//                           <Col  xs="3" md="3" style={{border: "2px solid blue"}}>
//                             Nxenesit:
//                           </Col>
//                           <Col  xs="9" md="9" style={{border: "2px solid red"}}>
//                             Shator 2020 Histori 11B
//                           </Col>
//                         </Row>
//                         <Row style={{border: "2px solid brown"}}>
//                             Tabela Ketu
//                         </Row>
//                       </Col>
//                       <Col xs="12" md="4" style={{border: "2px solid brown"}}>
//                         Right Menu
//                       </Col>
//                     </Row>
//                   </Col>

                  
//               </Row>
//           </Container>
//           <Container>
//             <h1> Hello </h1>
//             <SimpleUsers></SimpleUsers>
//           </Container>

//     </Provider>
//   );
// }

export default App;