import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { productdb } from './productdb'; // Import static images database

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5062/api/products'); // Replace with your API endpoint
                const fetchedProducts = response.data;

                // Match images from productdb based on productId
                const productsWithImages = fetchedProducts.map(product => {
                    const matchingProduct = productdb.find(p => p.productId === product.productId);
                    return {
                        ...product,
                        images: matchingProduct ? matchingProduct.images : [],
                    };
                });

                setProducts(productsWithImages);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products: {error.message}</div>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.productId}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>Category: {product.category}</p>
                        <div>
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image[index]} // Use the image path from the images array
                                    alt={`Product ${index + 1}`}
                                    style={{ width: '200px', margin: '10px' }}
                                    onError={(e) => { e.currentTarget.src = '../productimages/default.jpg'; }} // Fallback image if any image fails to load
                                />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;