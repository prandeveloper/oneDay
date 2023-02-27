import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "../../../../../assets/scss/pages/edit-campaign.scss";
class Zopier extends React.Component {
  state = {
    url: "",
  };
  render() {
    return (
      <>
        <h1 className="headAuto"> Zapier Integration</h1>
        <Row>
          <Col lg="12" sm="12">
            <Card>
              <CardBody className="pt-1">
                <p className="autoPara">
                  Hurray! After you launch your campaign we will walk you
                  through how to how to connect to your zapier account and start
                  sending in data.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Zopier;
