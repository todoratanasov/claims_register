import React, { Fragment, Component } from 'react';
import {Redirect} from 'react-router-dom';
class CreateNewClaim extends Component {
    constructor(props) {
        super(props);
        this.state={
            customer:"",
            product:"",
            manufacturer:"",
            customerEmail:"",
            description:"",
            createdClaim:false
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    };
    handleChange = ({target})=>{
        this.setState({
            [target.name]:target.value,

        })
    }
    handleSubmit = async(event)=>{
        event.preventDefault();
        const {customer, product, manufacturer, customerEmail, description} = this.state;
        const date = new Date();
        const data ={
            customer,
            product,
            manufacturer,
            customerEmail,
            description,
            date
        };
        const request = await fetch('http://localhost:5000/claim/create',{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            method:'POST',
            body: JSON.stringify(data)
        })  
        this.setState({createdClaim:true});
    }
    componentWillUnmount(){
        this.setState({createdClaim:false})
    }
    render() {
        const {customer,product,manufacturer,customerEmail,description}=this.state;
        const {createdClaim}=this.state;
        if(createdClaim){
            return <Redirect to="/"/>
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Име на клиент</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Например: Тодор Атанасов" 
                        name="customer" 
                        value={customer}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="product">Артикул</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="product" 
                        placeholder="Например: Спален комплект Селина" 
                        name="product"
                        value={product}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="manufacturer">Производител</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="manufacturer" 
                        placeholder="Например: Колорадо" 
                        name="manufacturer"
                        value={manufacturer}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="customerEmail">E-mail</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="customerEmail" 
                        placeholder="Например: mail@mail.bg" 
                        name="customerEmail"
                        value={customerEmail}
                        onChange={this.handleChange}
                        />
                    </div>
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

                <button type="submit" className="btn btn-primary">Създай рекламация</button>
            </form>
        )
    }
};

export default CreateNewClaim;