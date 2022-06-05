import React, {Fragment, useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './navigation.scss'
import {UserContext} from "../../contexts/user-context";
import {signOutUser} from "../utils/firebase/firebase";
import CardIcon from "../../components/cardIcon/CardIcon";
import CardDropDown from "../../components/cardDropDown/CardDropDown";
import {CardContext} from "../../contexts/card-context";


const Navigation = () => {
    const {currentUser} = useContext(UserContext)
const {isCardOpen} = useContext(CardContext)
    return (
        <Fragment>
            <div className="navigation container">
                <Link to='/' className="navigation__logo">
                    <Logo className="navigation__svg"/>
                </Link>
                <div className="navigation__list">
                    <Link className="navigation__link" to='/shop'>SHOP</Link>
                    {currentUser ?
                        (<span className='navigation__link' onClick={signOutUser}> SIGN OUT</span>)
                        : (<Link className="navigation__link" to='/auth'>SIGN IN</Link>)
                    }
                    <CardIcon/>
                </div>
                {isCardOpen && <CardDropDown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
