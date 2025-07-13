import React from "react";
import './Popular.css'; // Assuming you have a CSS file for styling
import data_products from '../Assets/data'; // Update the path as necessary
import Item from "../Item/Item";
const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-items">
               {data_products.map((item, i) => (
                   <Item key={i} id={item.id} name={item.name} image={item.image} new_prices={item.new_price} old_prices={item.old_price} />
               ))}
            </div>
        </div>
    );
};

export default Popular;
