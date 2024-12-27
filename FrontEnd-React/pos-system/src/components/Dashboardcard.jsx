import { Card, CardBody, CardHeader } from 'react-bootstrap';

export default function DashboardCard({ header, icon, count }) {
  return (
    <Card className="sectionBorder">
      <CardHeader className="font-weight-bolder" style={{ backgroundColor: 'dodgerblue' }}>{header}</CardHeader>
      <CardBody className="d-flex justify-content-around align-items-center">
        <div className="dash-tile-icon me-2"><i className={`bi ${icon}`}></i></div>
        <div className="dash-tile-text text-black-50"><h1>{count}</h1></div>
      </CardBody>
    </Card>
  );
}


