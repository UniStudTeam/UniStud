import React from 'react';
import {Container} from 'reactstrap';

import LoggedInInfo from './LoggedInInfo';
import MainMenu from './MainMenu';
import MessageNotifications from '../MessageNotifications';



const SidePanelParent = (props) => {

    return(
        <Container fluid={true} style={styles.sideBar}>
            <br></br>
                <LoggedInInfo userType="Mesues" userName = "Skerd" userSurname = "Xhafa"></LoggedInInfo>
                <br></br>
                <MainMenu></MainMenu>
                <br></br>
                <MessageNotifications></MessageNotifications>
        </Container>

    )

}

const styles = {
    sideBar: {
        maxWidth: 280,
        padding: 0,
        backgroundColor: 'white',
    }
  };

export default SidePanelParent;