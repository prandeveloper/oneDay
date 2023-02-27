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
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import "../../../assets/scss/pages/edit-campaign.scss";
class DisplaySite extends React.Component {
  state = {
    modal: false,
    url: "",
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <>
        <Row>
          <Col lg="12" sm="12">
            <h1> Where would you like to display this campaign?</h1>
            <Card>
              <h2 className="headAuto">Add your display URL's</h2>

              <CardBody className="pt-1">
                <h3>
                  Choose one or more pages where you would like to display
                  notifications.
                </h3>
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
export default DisplaySite;
