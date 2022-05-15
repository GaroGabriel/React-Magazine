import React, {Fragment} from 'react';
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './navigation.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation container">
                <Link to='/' className="navigation__logo">
                    <Logo className="navigation__svg"/>
                </Link>
                <div className="navigation__list">
                    <Link className="navigation__link" to='/shop'>Shop</Link>
                    <Link className="navigation__link" to='/signIn'>signIn</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
