import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden, cartItems }) => {
    const quantityTotal = cartItems.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <div className="header">
            <Link to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
            </Link>
                <Link className="option" to='/shop'>
                    CONTACT
            </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon total={quantityTotal} />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }, cart: { cartItems } }) => ({
    currentUser,
    hidden,
    cartItems
});



export default connect(mapStateToProps)(Header);