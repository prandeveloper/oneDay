import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import InputMask from "react-input-mask";
import "../../../../assets/scss/pages/edit-campaign.scss";
import Select from "react-select";
const category = [
  { value: "Lead", label: "Lead" },
  { value: "Purchase", label: "Purchase" },
  { value: "Schedule", label: "Schedule" },
  { value: "Subscribe", label: "Subscribe" },
  { value: "Start Trial", label: "Start Trial" },
  { value: "View Content", label: "View Content" },
  { value: "Complete Registration", label: "Complete Registration" },
];

class CreateGoal extends React.Component {
  state = {
    value: "",
    activeTab: "1",
    modal: false,
    campaignName: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // if (this.state.campaignName.length > 0) {
    //   this.setState({ isValid: true });
    // } else if (this.state.campaignName.length === 0) {
    //   this.setState({ isValid: false });
    // }
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    return (
      <Row>
        <Col lg="12" sm="12">
          <Card>
            <CardBody className="pt-1">
              <Row>
                <Col md="4"></Col>
                <Col md="4">
                  <div className="mainDiv">
                    <h1 className=" heading">
                      Set your goals
                      <span className="question">?</span>
                    </h1>
                  </div>
                </Col>
                <Col md="4">
                  <div className=" text-right">
                    <a
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
                          // toggle={this.toggleModal}
                          className="bg-primary"
                        >
                          Create your goal
                        </ModalHeader>
                        <ModalBody className="modal-dialog-centered">
                          <Form onSubmit={this.handleSubmit}>
                            <Row>
                              <Col lg="12" md="12" sm="12">
                                <FormGroup>
                                  <Label for="Category">Goal Category*</Label>
                                  <Select
                                    className="React customselect"
                                    // classNamePrefix="select"
                                    // defaultValue={category[0]}
                                    name="category"
                                    options={category}
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="12" md="12" sm="12" className="mb-2">
                                <FormGroup>
                                  <Label for="firstName">Name your Goal*</Label>
                                  <Input
                                    type="text"
                                    required
                                    placeholder="Ex:signed up for basic plan"
                                    onChange={(e) =>
                                      this.setState({
                                        campaignName: e.target.value,
                                      })
                                    }
                                    value={this.state.campaignName}
                                    id="campaignName"
                                    name="campaignName"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="12" md="12" sm="12" className="mb-2">
                                <Label for="firstName">
                                  Set conversion value
                                </Label>
                                <InputMask
                                  className="form-control"
                                  mask="$9999"
                                  placeholder="100"
                                />
                              </Col>

                              <Col md="12" sm="12" className="mb-2">
                                <FormGroup>
                                  <Label for="firstName">
                                    Set goal completion URL*
                                  </Label>
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
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <div className="add-task">
                                  <Button.Ripple
                                    block
                                    className="btn-block my-1"
                                    color="primary"
                                    // onClick={() => {
                                    //   this.props.addTask("open");
                                    //   this.props.mainSidebar(false);
                                    // }}
                                  >
                                    Create Goal
                                  </Button.Ripple>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </ModalBody>
                      </Modal>
                      Create Goals
                    </a>
                  </div>
                </Col>
              </Row>
              <p className="para">
                Track performance for this campaign with goals
              </p>
              <Row>
                <Col lg="6" md="6">
                  <div className="primarygoals">
                    <div>Primary Goals</div>
                    <ul>
                      <li>
                        <span>abc</span>
                      </li>
                      <li>abc1</li>
                      <li>abc2</li>
                      <li>abc3</li>
                      <li>abc3 dcssfsfffsgfsg</li>
                    </ul>
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <div className="primarygoals">
                    <div>Additional Goals Tracked</div>
                    <ul>
                      <li>
                        <span>abc</span>
                      </li>
                      <li>abc1</li>
                      <li>abc2</li>
                      <li>abc3</li>
                      <li>
                        <span>abc3 dcssfsfffsgfsg</span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default CreateGoal;
