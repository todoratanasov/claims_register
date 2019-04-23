import React, { Component, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
class Visit extends Component {
    constructor(props) {
        super(props)
        this.state={
            claimId: this.props.match.params.id.substr(1),
            address:"",
            description:"",
            itsCreated:false
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
            address:this.state.address,
            description:this.state.description
        }
        const request = await fetch(`http://localhost:5000/createvisit:${this.state.claimId}`,{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            method:'POST',
            body: JSON.stringify(data)
        })
        .then((res)=>{
            this.setState({
                itsCreated:true
            })
        })
        .catch((err)=>{
            console.log(`This is an error from creating a visit: ${err}`)
        })
        this.setState({createdClaim:true});
        console.log(this.state.address);
        console.log(this.state.description)
    }
    render() {
        const {address, description} = this.state;
        if(this.state.itsCreated){
            return <Redirect to="/"/>
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Адрес на огледа</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    aria-describedby="emailHelp" placeholder="Адрес:" 
                    name="address" 
                    value={address}
                    onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Описание</label>
                    <textarea 
                    className="form-control" 
                    id="description" 
                    rows="3" 
                    name="description"
                    value={description}
                    onChange={this.handleChange}
                    ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Запиши</button>
            </form>
        )
    }
}

export default Visit;