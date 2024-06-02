// components/ProductGrid.js
"use client";
import React, { useState } from 'react';
import ProductModal from './ProductModal';

const ProductGrid = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 cursor-pointer"
                        onClick={() => handleProductClick(product)}
                    >
                        <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
                        <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">${product.price}</p>
                    </div>
                ))}
            </div>
            {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
        </div>
    );
};

export default ProductGrid;
