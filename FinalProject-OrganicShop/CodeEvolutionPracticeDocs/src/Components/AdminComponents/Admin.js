import React, { useState, useEffect } from "react";
import axios from "axios";

const DEFAULT_IMAGES = {
  fruits: {
    kiwi: require('../../../src/productimages/kiwi.png'),
    lemon: require('../../../src/productimages/lemon.png'),
    mulberry: require('../../../src/productimages/mulberry.png'),
    strawberry: require('../../../src/productimages/strawberry.png'),
    apple: require('../../../src/productimages/apple.png'),
    banana: require('../../../src/productimages/banana.jpg'),
  },
  vegetables: {
    potato: require('../../../src/productimages/potato.png'),
    redonion: require('../../../src/productimages/redonion.png'),
    cucumber: require('../../../src/productimages/cucumber.png'),
    beetroot: require('../../../src/productimages/beetroot.png'),
    tomato: require('../../../src/productimages/tomato.png'),
    carrot: require('../../../src/productimages/carrot.jpg'),
    greenchilli: require('../../../src/productimages/greenchilli.png'),
    greenbell: require('../../../src/productimages/greenbell.png'),
  },
  essentials: {
    milk: require('../../../src/productimages/milk.png'),
    cookingoil: require('../../../src/productimages/cookingoil.png'),
    rice: require('../../../src/productimages/rice.png'),
    water: require('../../../src/productimages/water.png'),
    proteinpowder: require('../../../src/productimages/proteinpowder.png'),
  },
  eggandmeat: {
    chicken: require('../../../src/productimages/chicken.png'),
    egg: require('../../../src/productimages/egg.png'),
    fish: require('../../../src/productimages/fish.png'),
  },
};

const Admin = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5062/api/products");
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDefaultImage = (category, title) => {
    return DEFAULT_IMAGES[category.toLowerCase()][title.toLowerCase()] || 'default.jpg';
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container admin-container">
      <h1 className="main-heading">Product List</h1>

      <div>
        {products.map((product, index) => (
          <div key={index} className="card" style={{ display: "flex", marginBottom: "10px" }}>
            <img 
              src={fetchDefaultImage(product.category, product.title)} 
              alt={product.title} 
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div style={{ marginLeft: "10px" }}>
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Stock: {product.quantityInStock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;