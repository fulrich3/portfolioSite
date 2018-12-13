import * as React from "react";
import { Col } from "reactstrap";

import HeaderNav from "./HeaderNav/HeaderNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class HeaderRight extends React.Component {
    render(){
        return (
            <Col className="headerRight d-flex align-items-center" md={{size: 5, offset: 0}} lg={{size: 5, offset: 2}} xl={{size: 4, offset: 4}}>
                <HeaderNav/>
            </Col>
        );
    }
}