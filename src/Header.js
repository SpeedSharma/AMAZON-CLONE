import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'

function Header() {
    const [{ user, cart } ] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }


    return (
        <nav className="header">
            {/* logo on thte left -> img */}
            <Link to = '/'>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt=""/>
            </Link>
            {/*  Search box */} 
        <div className="header__search">
        <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>
            {/* 3 Links */}

            <div className="header__nav">
            {/* 1st Link */}
            <Link to={!user && '/login'} className="header__link">
            <div onClick={login} className="header__option">
                <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : ' Sign In '}</span>
            </div>
            </Link>

            {/* 2nd link */}
            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>
            {/* 3rd link */}
            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>
            {/* 4th link */}
            {/*  Baket icon with number */}
            <Link to = '/checkout'  className='header__link'>
                <div className='header__optionCart'>
                    {/* Shopping Basket Icon */}
                        <ShoppingCartIcon />
                    {/* Number of items in the basket */}
    <span className="header__optionLineTwo header__cartCount">{cart?.length}</span>
                </div>
            </Link>
            </div>
        </nav>
    );
}

export default Header;


