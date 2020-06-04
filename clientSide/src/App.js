import React, { Component } from 'react';
import LoginPage            from './components/LogIn/LoginPage';
import MainPage             from './components/MainPage/index';
import ReduxStore           from './ReduxStore';
import {Provider}           from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { loadUser } from './Redux/actions/authActions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadSpinner from './LoadSpinner';


// class App extends Component{

//   render() {
//     // this.isUserAuthenticated();
//     return (
     
//     );
//   }
// }

function App(props) {

  loadUser();

  return (
    <Provider store={ReduxStore}>
      <Router>
        <Switch>
          <Route exact path="" render={ () => {
            console.log(ReduxStore.getState().auth.isAuthenticated);
          }}/>  
          <Route exact path="/login" component={LoginPage}/>  
          <Route path="/home" component={MainPage} />
        </Switch>
      </Router>
    </Provider>
  );
}


// export default connect( mapStateToProps, ReduxStore, { loadUser } )(App);
export default App;


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
