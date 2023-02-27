import React from "react";
import {
  Media,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Table,
  Card,
  CardBody,
} from "reactstrap";
import "../../../../../assets/scss/pages/edit-campaign.scss";
class Auto extends React.Component {
  state = {
    url: "",
  };
  render() {
    return (
      <>
        <h1 className="headAuto"> Auto Lead Capture</h1>
        <Row>
          <Col lg="12" sm="12">
            <Card>
              <CardBody className="pt-1">
                <p className="autoPara">
                  Enter one or more URLs where you are capturing conversions.
                  This page must have a form field where visitors submit their
                  email and your pixel installed.
                </p>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col md="10" sm="10" className="mb-2">
                      <FormGroup>
                        <Input
                          type="text"
                          required
                          placeholder="URL"
                          onChange={(e) =>
                            this.setState({
                              campaignName: e.target.value,
                            })
                          }
                          value={this.state.campaignName}
                          id="campaignName"
                          name="campaignName"
                          valid={this.state.isValid === true}
                          invalid={this.state.isValid === false}
                        />
                        {this.state.isValid ? (
                          <span className="valid-tooltip">Looks Good!</span>
                        ) : this.state.isValid === false ? (
                          <span className="invalid-tooltip">
                            Please enter a Campaign Name
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Auto;
