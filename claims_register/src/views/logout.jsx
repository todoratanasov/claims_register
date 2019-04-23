import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import { UserConsumer, defaultUserState } from '../components/contexts/user-context';
class Logout extends Component{
    constructor(props){
        super(props);

        window.localStorage.removeItem('user');
        window.localStorage.removeItem('auth_token');
        props.updateUser(defaultUserState);//тук взимайки от props функцията, която променя дефолтния стейт директно си взимаме и дефолтния стейт и си го подаваме, за да се изчисти
    }

    render(){
       return <Redirect to="/"/>
    }
}

const LogoutWithContext = (props)=>{

    return(
        <UserConsumer>
            {
                ({updateUser})=>(
                    <Logout {...props} updateUser={updateUser}/>
                )
            }
        </UserConsumer>
    )
}

export default LogoutWithContext;