// src/components/ItemCard.js
import React from 'react';

const ItemCard = ({ item }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">${item.price}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <button className="bg-blue-600 text-white p-2 rounded">Add to Cart</button>
        </div>
    );
};

export default ItemCard;
