import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            claims: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/home/')
            .then(res=>res.json())
            .then(async (claims)=>{                
                this.setState({claims:claims.data})
            });            
    }

    render() {
        
        return (
            <Fragment>
                <div className="justify-content-center main-center-container">
                {
                    this.state.claims.length > 0
                        ?
                        this.state.claims.map((claim) => {
                            return (
                                
                                    <div className="card" key={claim._id}>
                                        <img src="https://s7d4.scene7.com/is/image/roomandboard/wyatt_438274_19e_g?hei=725&$str_g$" className="card-img-top" alt="bedroom"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{claim.product}</h5>
                                            <p className="card-text">{claim.customer}<br></br> </p>
                                            <Link to={`/claimdetails:${claim._id}`} className="btn btn-primary btn-claim">Детайли</Link>
                                        </div>
                                    </div>
                                
                            )
                        })
                        :
                        <div>There are no claims in DB</div>
                }
                </div>
            </Fragment>

        )
    }
}

export default Home;