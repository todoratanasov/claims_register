import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Claim extends Component {
    constructor(props) {
        super(props);
        this.state={
            claim: props.claim
        }
    }
    
    componentDidMount(){  
        const change=this.props.claim;      
        this.state={}
    }
    render() {
        console.log(this.state.claim)
        return (
            <Fragment>
                {
                    this.state.claim !== undefined
                        ?
                        <div className="card text-center">
                            <div className="card-header">
                                Клиент:   <strong>{this.props.claim.customer}</strong>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Производител: {this.props.claim.manufacturer}</h5>
                                <p className="card-text">Описание на проблема: <strong>{this.props.claim.description}</strong></p>
                                <Link to={`/createvisit:${this.props.claim._id}`} className="btn btn-primary">Go somewhere</Link>
                            </div>
                            <div className="card-footer text-muted">
                                <strong>Дата на рекламацията:</strong>{this.state.claim.date}
                            </div>
                        </div>
                        :
                        <div>Loading...</div>
                }
            </Fragment>
        )
    }
}

export default Claim;