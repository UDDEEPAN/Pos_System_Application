import { Link } from "react-router-dom";

import Navbar from "./components/Navigation";
import { useEffect, useState } from "react";
import axios from 'axios';






function Home() {
    const [customercount, setCustomerCount] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);

    useEffect(() => {
        // Fetch Customer Count
        axios.get("http://localhost:8080/customercount")
            .then(response => {
                console.log(response.data.count);
                setCustomerCount(response.data.count);

            })
            .catch(error => {
                console.error("Error fetching customer count:", error);
            });

        axios.get("http://localhost:8080/productcount")
            .then(response => {
                console.log(response.data.count);
                setProductCount(response.data.count);

            })
            .catch(error => {
                console.error("Error fetching product count:", error);
            });

        axios.get("http://localhost:8080/ordercount")
            .then(response => {
                console.log(response.data.count);
                setOrderCount(response.data.count);

            })
            .catch(error => {
                console.error("Error fetching product count:", error);
            });


    }, []);

    return {
        customercount,
        productCount,
        orderCount
    };
}

export default Home;
