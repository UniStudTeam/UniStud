import React from 'react';
import {Component} from 'react';
import {Row, Container} from 'reactstrap';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import RegjistriIcon from '../../Static/Icons/clipboard-notes.svg';
import DitariIcon from '../../Static/Icons/diary.svg';
import DetyraIcon from '../../Static/Icons/books.svg';
import BisedeIcon from '../../Static/Icons/books.svg';
import ParametratIcon from '../../Static/Icons/cog.svg';
import DilIcon from '../../Static/Icons/sign-out-alt.svg';



class MainMenu extends Component{

    constructor(props){
      super(props);
    }

    renderMenuItem() {
      var menuItems = [
        {menuName: "Regjistri", menuIcon: RegjistriIcon},
        {menuName: "Ditari", menuIcon: DitariIcon},
        {menuName: "Detyra", menuIcon: DetyraIcon},
        {menuName: "Biseda", menuIcon: BisedeIcon},
        {menuName: "Parametra", menuIcon: ParametratIcon},
        {menuName: "Dil", menuIcon: DilIcon}
      ];

      return menuItems.map((menuItem, index) => {
         const { menuName, menuIcon } = menuItem //destructuring
         return (
          <ListItem key={index} className="pl-4" button>
            <div className="row w-75 m-auto">
              <img className="mr-2" src={menuIcon} alt="Regjistri" />
              <ListItemText disableTypography >
                <h5>{menuName}</h5>  
              </ListItemText>
            </div>
          </ListItem>
         )
      })
   }

    render() {
      return ( 

        <div className="container-fluid p-0 m-0 border border-warning">
            <div className="row p-0 m-0 pl-4">
                <div className="col-11 offset-1 m-0 p-0">
                  <h5>Menu</h5>
                </div>
            </div>
            <div className="row w-100 m-0">
              <div className="col-12 p-0">
                <List className=" menuItem" disablePadding dense>

                  {this.renderMenuItem()}
                  
                 
                </List>
              </div>
            </div>
        </div>
      );
    }
}

export default MainMenu;
