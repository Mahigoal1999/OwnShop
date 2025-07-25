import React from "react";
import './Item.css'; // Assuming you have a CSS file for styling

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    <p>${props.new_price}10</p>                
                </div>
                <div className="item-price-old">
                    <p>${props.old_price}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;
