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
import "../../../../../assets/scss/pages/edit-campaign.scss";
class WebHook extends React.Component {
  state = {
    modal: false,
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
            <Card>
              <h1 className="headAuto">Webhook Integration ?</h1>

              <CardBody className="pt-1">
                <div className="d-flex">
                  <div className="ml-2">
                    <Button
                      color="primary"
                      className="btn-block"
                      onClick={this.toggleModal}
                    >
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleModal}
                        className="modal-dialog-centered"
                      >
                        <ModalHeader
                          toggle={this.toggleModal}
                          className="bg-primary"
                        >
                          Build & launch a new campaign
                        </ModalHeader>
                        <ModalBody className="modal-dialog-centered">
                          <Form onSubmit={this.handleSubmit}>
                            <Row>
                              <Col md="10" sm="10" className="mb-2">
                                <FormGroup>
                                  <Input
                                    type="text"
                                    required
                                    placeholder="Campaign Name"
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
                                    <span className="valid-tooltip">
                                      Looks Good!
                                    </span>
                                  ) : this.state.isValid === false ? (
                                    <span className="invalid-tooltip">
                                      Please enter a Campaign Name
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </FormGroup>
                              </Col>
                              <Col md="2" sm="2" className="">
                                <Button.Ripple
                                  color="primary"
                                  onClick={this.handleSubmit}
                                >
                                  Next
                                </Button.Ripple>
                              </Col>
                            </Row>
                          </Form>
                        </ModalBody>
                      </Modal>
                      Infusionsoft
                    </Button>
                  </div>
                  <div className="ml-2">
                    <Button
                      color="primary"
                      className="btn-block"
                      onClick={this.toggleModal}
                    >
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleModal}
                        className="modal-dialog-centered"
                      >
                        <ModalHeader
                          toggle={this.toggleModal}
                          className="bg-primary"
                        >
                          Build & launch a new campaign
                        </ModalHeader>
                        <ModalBody className="modal-dialog-centered">
                          <Form onSubmit={this.handleSubmit}>
                            <Row>
                              <Col md="10" sm="10" className="mb-2">
                                <FormGroup>
                                  {/* <Label for="firstName">
                                          First Name
                                        </Label> */}
                                  {/* <h2> Build & launch a new campaign</h2> */}
                                  <Input
                                    type="text"
                                    required
                                    placeholder="Campaign Name"
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
                                    <span className="valid-tooltip">
                                      Looks Good!
                                    </span>
                                  ) : this.state.isValid === false ? (
                                    <span className="invalid-tooltip">
                                      Please enter a Campaign Name
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </FormGroup>
                              </Col>
                              <Col md="2" sm="2" className="">
                                <Button.Ripple
                                  color="primary"
                                  onClick={this.handleSubmit}
                                >
                                  Next
                                </Button.Ripple>
                              </Col>
                            </Row>
                          </Form>
                        </ModalBody>
                      </Modal>
                      Custom WebHook
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default WebHook;
