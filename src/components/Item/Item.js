import React, {Component} from 'react';
import PropTypes from 'prop-types';
import data from '../../data/products.json';
import './Item.css';


class AddToCart extends Component {
    render() {
        
        return (
            <button class="addToCart">
                Add to Cart
            </button>
        )
        
    }
     
}


class SelectSize extends Component {
    render() {
        return (
            <select class="selectSize">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
        )   
        
    }    
    
}



class Item extends Component {
    render() {
        const {id, name, price, size} = this.props
        
        return (
            <div class="item">
                <img class="itemImg" src={require(`../../data/products/${id}_1.jpg`)}/>
                <div class="name">{name}</div>
                <div class="price">
                    ${price.toFixed(2)}
                </div>
                <SelectSize/>
                <AddToCart/>
            </div>
        )
    }
}



class ItemDisplay extends Component {
    
    render() {
        
        const items = Object.values(data);
        
        return (
            <div class="items">
                {items.map(itm => {
                    return <Item id={itm.sku} name={itm.title} price={itm.price}/>
                }   
            )}
            </div>
        
        )
        
    }
     
}

export default ItemDisplay;