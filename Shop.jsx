import react from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular"; // Assuming you have a Popular component
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections"; // Assuming you have a NewCollections component
const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
        </div>
    );
};

export default Shop;
    