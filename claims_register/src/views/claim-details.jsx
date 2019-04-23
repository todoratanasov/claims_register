import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class ClaimDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            claim: {},
            claimId: this.props.match.params.id.substr(1),
            closed:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: !this.state.closed,
        });
        console.log(this.state.closed)
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.claimId);
        console.log(this.state.closed)
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
        const {closed}=this.state;
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
                                <p className="card-text">Описание на проблема: <strong>{this.state.claim.description}</strong></p>
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
                                <Link to={`/createvisit:${this.state.claim._id}`} className="btn btn-primary">Go somewhere</Link>
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