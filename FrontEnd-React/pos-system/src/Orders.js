import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navigation";


function Orders() {

    const [orders, setOrders] = useState(null);
    const navigate = useNavigate();


    axios.get("http://localhost:8080/orders")
        .then(function (response) {
            setOrders(response.data)
        }).catch(function (error) {
            console.log(error);
        });



    function createOrder() {
        const orderData = {};
        axios.post("http://localhost:8080/orders", orderData)
            .then(function (response) {
                navigate(`/orders/${response.data.id}/editorder`);
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Navbar />
            <div className="container">

                <h1>Orders</h1>
                <div className="text-end">
                    <button type="button" onClick={createOrder} className="btn btn-primary">Add order</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Date & Time</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders && orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.orderDateTime}</td>
                                <td>{order.totalprice}</td>
                                <td>
                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => {
                                        navigate(`/orders/${order.id}/editorder`);
                                    }}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders;