import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.explore}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.order}</a>
                        </li>
                    </ul>

                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}

                    <div className={`form-check form-switch text-${props.mode==='light'?'#042743':'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>

    )
}

// use to know the type of the properties
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    explore: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired
}

// used to set default values for the props
Navbar.defaultProps = {
    title: "Cloud Kitchen",
    order: "Order Now",
    explore: "Explore"
}
