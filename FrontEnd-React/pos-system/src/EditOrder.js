import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navigation";


function EditOrder() {

    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [product, setProduct] = useState(null);



    axios.get(`http://localhost:8080/orders/${id}`)
        .then(function (response) {
            setOrder(response.data)
        }).catch(function (error) {
            console.log(error)
        })
    axios.get("http://localhost:8080/products")
        .then(function (response) {
            setProduct(response.data)
        }).catch(function (error) {
            console.log(error)
        })



    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1>Add Products To Order</h1>


                {order &&
                    <div>
                        <div className="order details">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="dateTime">
                                    Date & Time : {order.orderDateTime}
                                </div>
                                <div className="Total Price">
                                    <h3>Total Price : {order.totalprice}</h3>

                                </div>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-9">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Name</th>
                                            <th>Product Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.orderedProducts.map((product) => (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => {

                                                        axios.delete(`http://localhost:8080/orders/${id}/product/${product.id}`)
                                                            .then(function (response) {
                                                                setOrder(response.data);

                                                            }).catch(function (error) {
                                                                console.log(error);
                                                            });

                                                    }}>Remove</button>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-3">
                                <div className="products">
                                    {product && product.map((product) => (
                                        <div className="product">
                                            <h5>{product.name}</h5>
                                            <div>Rs.{product.price}</div>
                                            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => {

                                                const data = {
                                                    proudctId: product.id,
                                                    quantity: 1
                                                }

                                                axios.post(`http://localhost:8080/orders/${id}/addProducts`, data)
                                                    .then(function (response) {
                                                        setOrder(response.data);
                                                    }).catch(function (error) {
                                                        console.log(error);
                                                    });


                                            }}>Add</button>
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default EditOrder;