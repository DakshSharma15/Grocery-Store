import React, { useState, useEffect } from 'react';
import './RetailerDashboard.css';

function RetailerDashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState({
    ProductID: '',
    ProductName: '',
    Category: '',
    Price: '',
    Stock: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    fetch('http://localhost:3000/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const product = await response.json();
        setProducts([...products, product]);
        setNewProduct({
          ProductID: '',
          ProductName: '',
          Category: '',
          Price: '',
          Stock: ''
        });
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch('http://localhost:3000/deleteproduct', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        setProducts(products.filter(product => product._id !== productId));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Retailer Dashboard</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product ID"
          value={newProduct.ProductID}
          onChange={(e) => setNewProduct({ ...newProduct, ProductID: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.ProductName}
          onChange={(e) => setNewProduct({ ...newProduct, ProductName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.Category}
          onChange={(e) => setNewProduct({ ...newProduct, Category: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.Price}
          onChange={(e) => setNewProduct({ ...newProduct, Price: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.Stock}
          onChange={(e) => setNewProduct({ ...newProduct, Stock: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <div className="product-info">
              <span>Product ID: {product.ProductID}</span>
              <span>Product Name: {product.ProductName}</span>
              <span>Category: {product.Category}</span>
              <span>Price: Rs.{product.Price}</span>
              <span>Stock: {product.Stock}</span>
            </div>
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Orders</h3>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <div className="order-info">
              <span>Order ID: {order._id}</span>
              <span>Customer ID: {order.user}</span>
              <span>Products: {order.items.map(item => (
                <span key={item._id}>{item.ProductName} (Qty: {item.quantity}), </span>
              ))}</span>
              <span>Total: Rs.{order.total}</span>
              <span>Date: {new Date(order.date).toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RetailerDashboard;
