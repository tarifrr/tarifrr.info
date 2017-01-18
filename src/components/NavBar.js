import React from 'react';
import {Col,Nav,NavItem} from 'react-bootstrap/lib/';

const NavBar = ({options}) => {

    const listOfOptions = options.map( (option, index) => {
        return(
            <NavItem key={index}>{option}</NavItem>
        )
      });

      return(
            <Col smOffset={2} sm={8} mdOffset={1} md={10} mdOffset={4} md={6} ><Nav bsStyle="tabs">{listOfOptions}</Nav></Col>
        )


}

export default NavBar;
