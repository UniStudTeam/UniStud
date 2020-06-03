import React, { Component } from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import personAvatar from '../Static/Images/person.png';
import newMessage from '../Static/Icons/messageStatusNew.svg';



class MessageNotifications extends Component{

    constructor(props){
      super(props);
      this.state = {
        messageNotificationArray: []
      };
    }

    componentDidMount(){
        //api call to fetch 7 most recent messages,
        //check every 5seconds for fresh messages
        this.setState({
            messageNotificationArray: [ {status : "unseen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar}, 
                                        {status : "unseen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "unseen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "unseen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "seen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "seen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},

                                        ]
        })
    }

    renderMessage(){
        return this.state.messageNotificationArray.map((message, index) => {
            const { status, sender, messageContent, avatarSource } = message //destructuring
            var newMsgIcon;
            if( status == "unseen"){
                newMsgIcon = React.createElement('img', { className: ' mt-auto mb-auto' , src: newMessage, style: {"width":"12px", "height":"12px"} });
            }else{
                newMsgIcon = React.createElement('img', { className: ' mt-auto mb-auto' ,  style: {"width":"12px", "height":"12px"} });
            }
            return (
                <ListItem key={index} className="p-0 m-0 mb-2" button>
                    <div className="row w-100 p-0 m-0">

                        <div className="container-fluid align-items-center h-100 d-flex p-0 m-0 ">
                            <div className="row w-100 p-0 m-0">
                                
                                <div className="" >
                                    {newMsgIcon}
                                </div>
                                
                                <div className="" style={{"width":"28px", "height":"28px"}}>
                                    <img className="w-100 rounded-circle mt-auto mb-auto" src={avatarSource} alt="Person Avatar" />
                                </div>

                                <div className="">
                                    <div className=" " style={{"fontSize": "14px"}}>
                                        <strong>{sender}</strong>
                                    </div>
                                    <div className="" style={{"fontSize": "14px"}}>
                                        {messageContent.slice(0,35) + "..."}
                                    </div>
                                </div>

                            </div>
                        </div>
                 
                    </div>
                </ListItem>
            )
        })
    }
  
   
    render() {
      return (
            <div className="container-fluid p-0 m-0 border border-warning" >
                <div className="row ml-4 p-0 m-0">
                    <div className="col-11 offset-1 m-0 p-0">
                        <h5>Mesazhe</h5>
                    </div>
                </div>
                <div className="row w-100 m-0 p-0 pl-3">
                    <List className="w-100 menuItem" disablePadding dense>
                        {this.renderMessage()}
                    </List>
                </div>
            </div>
      );
    }
  
  
  }


export default MessageNotifications;



