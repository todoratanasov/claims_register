import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
class ClaimDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            claim: {},
            claimId: this.props.match.params.id.substr(1),
            closed: true,
            changed: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
    };

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: !this.state.closed,
        });
    };
    handleAreaChange = ({ target }) => {        
        this.setState({
            [target.name]: target.value,
        });
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            closed: this.state.closed,
            description:this.state.description
        };
        const request = await fetch(`http://localhost:5000/editclaim:${this.state.claimId}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: 'PUT',
            body: JSON.stringify(data)
        })
            .then((res) => {
                return res.json()
            })
            .then((claim) => {
                this.setState({
                    claim: claim.data,
                    changed:true
                })
            })
            .catch((err) => {
                console.log(`This is an error from updatind claim ${err}`)
            })
    }
    componentDidMount() {
        fetch(`http://localhost:5000/claimdetails:${this.state.claimId}`)
            .then(res => res.json())
            .then((claim) => {
                this.setState({
                    claim: claim.data
                })
            })
    }
    render() {
        const { closed } = this.state;
        if(this.state.changed){
            return <Redirect to="/"/>
        }
        return (
            <Fragment>
                {
                    this.state.claim !== undefined
                        ?
                        <div className="card text-center claim-details">
                            <div className="card-header">
                                Клиент:   <strong>{this.state.claim.customer}</strong>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Производител: {this.state.claim.manufacturer}</h5>
                                <span className="card-text">Описание на проблема: {this.state.claim.description}</span>
                                    <div className="form-group">
                                        <label htmlFor="description">Промяна на описанието</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            rows="3"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.handleAreaChange}
                                        ></textarea>
                                    </div>
                                
                                {
                                    this.state.claim.closed
                                        ?
                                        <span>Рекламацията е Неактивна</span>
                                        :
                                        <span>Рекламацията е Активна</span>
                                }
                                <form className="bordered" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={closed}
                                                id="defaultCheck1"
                                                onChange={this.handleChange}
                                                name="closed"
                                            />
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Неактивна рекламация
                                                </label>
                                        </div>


                                    </div>
                                    <button type="submit" className="btn btn-primary float-sm-left">Запиши</button>
                                </form>
                                <Link to={`/createvisit:${this.state.claim._id}`} className="btn btn-primary">Създай оглед</Link>
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
};

export default ClaimDetails