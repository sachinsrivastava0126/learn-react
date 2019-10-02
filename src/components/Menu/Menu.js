import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Menu.css'

class Menu extends Component {
    
    render() {
        return (
            <div id="menu" class="menu">
                <div class="menu-title">REACT SHOPPING</div>
                <div class="menuOptions">
                    <div class="filter">FILTER</div>
                    <div class="sort">SORT</div>
                    <div class="cart">CART</div>
                </div>
            </div>
        )
            
    } 
    
    
}

export default Menu;