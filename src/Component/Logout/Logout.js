import React,{Component} from "react";
import {Redirect} from "react-router-dom";


class LogOut extends Component {
    componentDidMount(){
       console.log("Logout..");
    };

    render(){
        return <Redirect to="/"/>
    }
}

export default LogOut;