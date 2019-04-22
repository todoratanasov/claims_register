import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Claims register</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/createnewclaim">Нова рекламация</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">Регистрация</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Вход</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/logout">Изход</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/search">Справки</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navigation;