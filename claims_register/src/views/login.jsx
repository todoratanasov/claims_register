import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';
import {UserConsumer} from '../components/contexts/user-context';

class Login extends Component{
    static service = new AuthenticationService();
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            error:"",

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange = ({target})=>{
        this.setState({
            [target.name]:target.value,

        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        const {email,password}= this.state
        const {updateUser}=this.props;
        const credentials={            
            email,
            password
        }
        this.setState({
            error:""
        },async ()=>{
            try{
                const result = await Login.service.login(credentials);
                
                if(!result.success){
                    const errors = Object.values(result.errors).join(" ")
                    throw new Error(errors);
                }


                window.localStorage.setItem('auth_token',result.token);//тук закачаме на window токена, който получаваме при логин
                window.localStorage.setItem('user', JSON.stringify({
                    ...result.user,
                    isLoggedIn:true,
                }))

               updateUser({
                   isLoggedIn:true,
                   updateUser,
                   ...result.user
               });
               
    
            }catch(error){
                this.setState({
                    error:error.message
                })
            }
        })
        
    }
    render(){
        const {email, password, error}=this.state;
        const {isLoggedIn} = this.props;
        if(isLoggedIn){
            return(
                <Redirect to="/"/>
            )
        }
        return (
            <div className="form-wrapper">
                {
                    error.length
                    ?<div>Something went wrong{error}</div>
                    :
                    null
                }
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="username"
                    name="email" 
                    placeholder="Enter username" 
                    value={email}
                    onChange={this.handleChange}
                    />
                    
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={this.handleChange}
                    />
                </div>                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

const LoginWithContext = (props)=>{
    return(
        <UserConsumer>
            {
                ({isLoggedIn, updateUser})=>( //тук получава контекст от Provider
                    <Login 
                        {...props}
                        isLoggedIn={isLoggedIn}
                        updateUser={updateUser}
                    />
                )
            }
        </UserConsumer>
        
    )
}
export default LoginWithContext;