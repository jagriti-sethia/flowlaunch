// components/ProductModal.js
"use client";
import React from 'react';

const ProductModal = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden max-w-md mx-auto p-4">
                <button className="absolute top-2 right-2" onClick={onClose}>
                    &times;
                </button>
                <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
                <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
                <p className="mt-1 text-sm text-gray-600">${product.price}</p>
                <p className="mt-2">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductModal;
