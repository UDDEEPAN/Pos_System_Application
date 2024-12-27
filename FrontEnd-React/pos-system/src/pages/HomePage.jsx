import { Col, Row } from "react-bootstrap";
import Home from "../Home";
import DashboardCard from "../components/Dashboardcard";
import Navbar from "../components/Navigation";
import './HomePage.css'
function Homepage() {
    const { customercount, productCount, orderCount } = Home();
    return (
        <div className="dashbordcard">
            <Navbar />
            <main className="container-fluid mt-2">
                <div className="jumbotron mt-5">
                    <div id="home-tiles">
                        <Row>
                            <Col lg={6} xl={3} mb={2}>
                                <DashboardCard header="Customers" icon="bi-people-fill" count={customercount}></DashboardCard>
                            </Col>

                            <Col>
                                <DashboardCard header="Store" icon="bi-boxes" count={productCount}></DashboardCard>
                            </Col>
                            <Col>
                                <DashboardCard header="Orders" icon="bi-cart-fill" count={orderCount}></DashboardCard>
                            </Col>
                        </Row>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Homepage;
