import React from 'react';
import './NewCollections.css'; // Assuming you have a CSS file for styling
import new_collection from '../Assets/new_collections'; // Update the path as necessary
import Item from "../Item/Item"; // Assuming you have an Item component

const NewCollections = () => {
    return (
        <div className="new_collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_prices={item.new_price} old_prices={item.old_price} />;
                })}
            </div>
        </div>
    );
};
export default NewCollections;