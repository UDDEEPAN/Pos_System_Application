import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation';


function Users() {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('');
    const [editId, setEditId] = useState(null);
   


    useEffect(() => {

        getUsers();
        

    }, []);

    const getUsers = () => {
        Axios.get("http://localhost:8080/users")
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    };
    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const createUser = (event) => {
        event.preventDefault();

        const data = {
            username: username,
            address: address,
            number: number,
            email: email
        };

        Axios.post("http://localhost:8080/users", data)
            .then((response) => {
                getUsers();
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateUser = (event) => {
        event.preventDefault();

        const data = {
            username: username,
            address: address,
            number: number,
            email: email
        };

        Axios.put(`http://localhost:8080/users/${editId}`, data)
            .then((response) => {
                getUsers();
                setEditId(null);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        
        <div>
            <Navbar />
            <div className="container">
                <h1>Customers</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>E-Mail</th>
                            <th>EDIT</th>
                            <th>DELETE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.number}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>

                                <td>
                                    <button className="btn btn-warning" onClick={() => {
                                        setEditId(user.id);
                                        setUsername(user.username);
                                        setNumber(user.number);
                                        setAddress(user.address);
                                        setEmail(user.email);
                                    }}>Edit</button>
                                </td>

                                <td>

                                    <button className="btn btn-danger" onClick={() => (
                                        Axios.delete("http://localhost:8080/users/" + user.id)
                                            .then(function () {
                                                getUsers()

                                            })
                                            .catch(function (error) {
                                                console.log(error)
                                            })
                                    )}>Delete</button>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                {!editId &&
                    <div>
                        <h2>Create User</h2>
                        <form onSubmit={createUser}>
                            <div className="form-row">
                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom01">Customer Name</label>
                                    <input type="text" class="form-control" id="validationCustom02" placeholder='Customer Name' value={username} onChange={handleUsernameChange} required />
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <label for="validationCustom03">Address</label>
                                <input type="text" class="form-control" id="validationCustom04" placeholder='Address' value={address} onChange={handleAddressChange} required />
                            </div>

                            <div className="col-md-3 mb-3">
                                <label for="validationCustom05">Mobile Number</label>
                                <input type="text" class="form-control" id="validationCustom06" placeholder='Mobile Number' value={number} onChange={handleNumberChange} required />
                            </div>

                            <div className="col-md-3 mb-3">
                                <label for="validationCustom07">Email</label>
                                <input type="text" class="form-control" id="validationCustom08" placeholder='Email' value={email} onChange={handleEmailChange} required />
                            </div>

                            <button className="btn btn-success" type="submit">Create User</button>
                        </form>
                    </div>
                }
                {editId && (
                    <div>
                        <h2>Edit User</h2>
                        <form onSubmit={updateUser}>
                            <div className="form-row">
                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom01">Customer Name</label>
                                    <input type="text" class="form-control" id="validationCustom02" placeholder="Customer Name" value={username} onChange={handleUsernameChange} required />
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <label for="validationCustom03">Address</label>
                                <input type="text" class="form-control" id="validationCustom04" placeholder="Address" value={address} onChange={handleAddressChange} required />
                            </div>

                            <div className="col-md-3 mb-3">
                                <label for="validationCustom05">Mobile Number</label>
                                <input type="text" class="form-control" id="validationCustom06" placeholder="Mobile Number" value={number} onChange={handleNumberChange} required />
                            </div>

                            <div className="col-md-3 mb-3">
                                <label for="validationCustom07">Email</label>
                                <input type="text" class="form-control" id="validationCustom08" placeholder="Email" value={email} onChange={handleEmailChange} required />
                            </div>
                            <button className="btn btn-success" type="submit">Update User</button>
                            <button className="btn btn-success" onClick={() => setEditId(null)}>Cancel</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
        
    );
}

export default Users;