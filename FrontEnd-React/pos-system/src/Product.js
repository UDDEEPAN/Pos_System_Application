import axios from "axios";
import { useEffect, useState } from "react";

import Navbar from "./components/Navigation";
import './product.css'


function Products() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    


  

    
            axios.get("http://localhost:8080/products")
                .then(function (response) {
                    setProducts(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

            axios.get("http://localhost:8080/categories")
                .then(function (response) {
                    setCategories(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
  

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [edit, setEdit] = useState("");

    function handleName(event) {
        setName(event.target.value);
    }

    function handlePrice(event) {
        setPrice(event.target.value);
    }

    function handleQuantity(event) {
        setQuantity(event.target.value);
    }

    function handleCategory(event) {
        setCategory(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            quantity: quantity,
            categoryid: category,
        }

        axios.post("http://localhost:8080/products", data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function getProducts() {
        axios.get("http://localhost:8080/products")
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleUpdate(event) {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            quantity: quantity,
            categoryid: category,
        }

        axios.put(`http://localhost:8080/products/${edit}`, data)
            .then(function (response) {
                getProducts()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (

        <div>
            <Navbar />
            <div className="container">
                <h1>Products</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category?.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => {
                                        setEdit(product.id);
                                        setName(product.name);
                                        setPrice(product.price);
                                        setQuantity(product.quantity);
                                        setCategory(product.category?.id || "");
                                    }}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {!edit &&
                    <form onSubmit={handleSubmit} >
                        <h2>Create Product</h2>
                        <div className="form-row">
                            <div class="col-md-3 mb-3">
                                <label for="validationCustom01">Name</label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="Name" value={name} onChange={handleName} required />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationCustom04">Price</label>
                            <input type="text" class="form-control" id="validationCustom04" placeholder="Price" value={price} onChange={handlePrice} required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationCustom05">Quantity</label>
                            <input type="text" class="form-control" id="validationCustom05" placeholder="Quantity" value={quantity} onChange={handleQuantity} required />
                        </div>
                        <div>

                            <label for="validationCustom05">Category</label>
                            <select className="form-select form-select-lg mb-3" aria-label="Default select example" value={category} onChange={handleCategory} required>
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-success" type="submit">Add Product</button>
                    </form>
                }

                {edit &&
                    <form onSubmit={handleUpdate}>
                        <h2>Update Product</h2>
                        <div className="form-row">
                            <div class="col-md-3 mb-3">
                                <label for="validationCustom01">Name</label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="Name" value={name} onChange={handleName} required />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationCustom04">Price</label>
                            <input type="text" class="form-control" id="validationCustom04" placeholder="Price" value={price} onChange={handlePrice} required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationCustom05">Quantity</label>
                            <input type="text" class="form-control" id="validationCustom05" placeholder="Quantity" value={quantity} onChange={handleQuantity} required />
                        </div>
                        <div>

                            <label for="validationCustom05">Category</label>
                            <select className="form-select form-select-lg mb-1" aria-label="Default select example" value={category} onChange={handleCategory} required>
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-success" type="submit">Update Product</button>
                    </form>
                }
            </div>
        </div>

    );
}

export default Products;

