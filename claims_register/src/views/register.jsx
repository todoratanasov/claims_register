import React, { Fragment, Component } from 'react';
import {Redirect} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:"",
            created:false
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange = ({target})=>{
        this.setState({
            [target.name]:target.value,

        })
    }
    handleSubmit = async(event)=>{
        event.preventDefault();
        const data={
            email:this.state.email,
            passwordFront:this.state.password
        }
        const request = await fetch('http://localhost:5000/register',{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            method:'POST',
            body: JSON.stringify(data)
        })
        .then((res)=>{
            this.setState({
                created:true
            })
        })
    }
    render() {    
        const {email,password}=this.state
        if(this.state.created){
            return <Redirect to="/login"/>
        } 
        return (

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="username" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    />
                    
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    />
                </div>                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
};

export default Register;