import * as React from "react";
import {Row, Col} from 'reactstrap';

import Hobby from "./Hobby/Hobby";

interface HobbiesProps {
    hobbies:any
}

export default class Hobbies extends React.Component<HobbiesProps>{
    constructor(props:HobbiesProps){
        super(props);
    }

    render(){
        var key=0;
        var me = this;
        var hobbies = this.props.hobbies.map(function(hobby:any){
            return(
                <Col xs="6" md={{ size:Math.floor( 12 / me.props.hobbies.length) , offset: key==0 ? 1 : 0 }}  key={key++}>
                    <Hobby id={hobby.id} description={hobby.description} animationImages={hobby.animationImages} backgroundColor={hobby.backgroundColor}/>
                </Col>
            );
        });

        return (
            <div>
                <Row>
                    <Col md="12" >
                        <h2>Centres d'intérêts</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            {hobbies}
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}