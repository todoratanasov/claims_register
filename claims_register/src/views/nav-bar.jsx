import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'
import { UserConsumer } from '../components/contexts/user-context';

class Navigation extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <UserConsumer>
                {
                    ({ isLoggedIn }) => (
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="navbar-brand" to="/">Claims register</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/createnewclaim">Нова рекламация</Link>
                                    </li>
                                    {
                                        isLoggedIn
                                            ?
                                            (<li className="nav-item">
                                                <Link className="nav-link" to="/logout" >Изход</Link>
                                            </li>)
                                            :
                                            (
                                                <Fragment>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/register">Регистрация</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/login">Вход</Link>
                                                    </li>
                                                </Fragment>
                                            )
                                    }

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/search">Справки</Link>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    )
                }


            </UserConsumer>
        )
    }
}
export default Navigation;