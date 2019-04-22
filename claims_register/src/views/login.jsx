import React, { Fragment, Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="email" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password"/>
                </div>                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
};

export default Login;