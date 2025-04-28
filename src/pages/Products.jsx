import React, { useState, useEffect } from "react";

export function Products() {
  const [showForm, setShowForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleCreate = () => {
    setCurrentProduct(null);
    setShowForm(true);
  };

  const handleUpdate = (product) => {
    setCurrentProduct(product);
    setShowForm(true);
  };

  return (
    <div className="container mt-5">
      {showForm ? (
        <ProductForm 
          onCancel={() => setShowForm(false)} 
          product={currentProduct}
          onSuccess={() => setShowForm(false)}
        />
      ) : (
        <ProductList onCreate={handleCreate} onEdit={handleUpdate} />
      )}
    </div>
  );
}

function ProductList({ onCreate, onEdit }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setProducts(products.filter(product => product.id !== id));
    })
    .catch(error => console.error('Error deleting product:', error));
  };

  if (loading) return <div>Loading products...</div>;

  return (
    <>
      <h3 className="text-center mb-4">List of Products</h3>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount (R)</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>R{product.amount}</td>
              <td>{product.description}</td>
              <td>{product.createdAt ? product.createdAt.split('T')[0] : new Date().toISOString().split('T')[0]}</td>

              <td>
              <div className="d-flex justify-content-start">
              <button 
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(product)}
              >
                Update            
              </button>
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center">
        <button className="btn btn-primary mt-3" onClick={onCreate}>
          Create Product
        </button>
      </div>
    </>
  );
}

function ProductForm({ onCancel, product, onSuccess }) {
  const [name, setName] = useState(product ? product.name : "");
  const [amount, setAmount] = useState(product ? product.amount : "");
  const [description, setDescription] = useState(product ? product.description : "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !description) {
      alert("All fields are required!");
      return;
    }

    const newProduct = {
      name: name,
      amount: parseFloat(amount), // ensure amount is a number
      description: description,
      createdAt: product ? product.createdAt : new Date().toISOString().split('T')[0]
    };

    const url = product 
      ? `http://localhost:5000/products/${product.id}` 
      : 'http://localhost:5000/products';
    const method = product ? 'PUT' : 'POST';

    setLoading(true);

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      onSuccess(); 
    })
    .catch(error => console.error('Error:', error))
    .finally(() => setLoading(false));
  };

  return (
    <>
      <h3 className="text-center mb-4">{product ? "Update Product" : "Create New Product"}</h3>

      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount (R)</label>
          <input 
            type="number" 
            className="form-control" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success me-2" disabled={loading}>
            {loading ? "Saving..." : (product ? "Update" : "Create")}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
