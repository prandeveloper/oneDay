import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Progress,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CardHeader,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { MoreHorizontal, ChevronDown } from "react-feather";
import { modalFade } from "../../../components/reactstrap/modal/ModalSourceCode";
import "../../../assets/scss/pages/campaign.scss";
import Select from "react-select";
const showing = [
  { value: "all goals", label: "all goals" },
  { value: "Schedule", label: "Schedule" },
  { value: "Lead", label: "Lead" },
];
const sortedBy = [
  { value: "modified date", label: "modified date" },
  { value: "created date", label: "created date" },
];
class Goals extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
  };
  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    return (
      <>
        <div className="heading1">
          <h1>Your Goals</h1>
        </div>
        <Row className="mb-2">
          <Col lg="6" md="6" sm="12">
            <span>1 of 1 campaigns</span>
            <div className="d-flex mt-2">
              <div className="d-flex">
                <div className="pr-1">Showing </div>
                <div className="selectData">
                  <Select
                    className="React customselect"
                    classNamePrefix="select"
                    defaultValue={showing[0]}
                    name="color"
                    options={showing}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="pl-1">Sorted by </div>
                <div className="selectData">
                  <Select
                    className="React customselect pl-1"
                    classNamePrefix="select"
                    defaultValue={sortedBy[0]}
                    name="color"
                    options={sortedBy}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="float-right">
              {/* <Button.Ripple className="" color="primary">
                Create Goals
              </Button.Ripple> */}
              <Button.Ripple
                color="primary"
                className="btn-block"
                onClick={this.toggleModal}
              >
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className="modal-dialog-centered"
                >
                  <ModalHeader toggle={this.toggleModal} className="bg-primary">
                    Create your goal
                  </ModalHeader>
                  <ModalBody className="modal-dialog-centered">
                    <div className="selectData">
                      <Select
                        className="React customselect"
                        classNamePrefix="select"
                        defaultValue={showing[0]}
                        name="color"
                        options={showing}
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>
                      Accept
                    </Button>
                  </ModalFooter>
                </Modal>
                Create Campaign
              </Button.Ripple>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody>
                <Row>
                  <Col lg="6" sm="12">
                    <h5>Abc</h5>
                  </Col>
                  <Col lg="6" sm="12" className="text-right">
                    <UncontrolledButtonDropdown className="rt-t">
                      <DropdownToggle caret>
                        <MoreHorizontal size={15} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a">edit</DropdownItem>
                        <DropdownItem tag="a">delete</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </Col>
                </Row>
                <span>Created 12 min ago </span>

                <div>
                  <Button.Ripple
                    className="round my-2"
                    color="primary"
                    size="sm"
                    outline
                  >
                    lead
                  </Button.Ripple>
                </div>
                <div className="text-right">
                  <span>modified 12 min ago</span>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody>
                <Row>
                  <Col lg="6" sm="12">
                    <h5>xyz</h5>
                  </Col>
                  <Col lg="6" sm="12" className="text-right">
                    <UncontrolledButtonDropdown className="rt-t">
                      <DropdownToggle caret>
                        <MoreHorizontal size={15} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a">edit</DropdownItem>
                        <DropdownItem tag="a">delete</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </Col>
                </Row>
                <span>Created 15 min ago </span>

                <div>
                  <Button.Ripple
                    className="round my-2"
                    color="primary"
                    size="sm"
                    outline
                  >
                    schedule
                  </Button.Ripple>
                </div>
                <div className="text-right">
                  <span>modified 15 min ago</span>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody>
                <Row>
                  <Col lg="6" sm="12">
                    <h5>test</h5>
                  </Col>
                  <Col lg="6" sm="12" className="text-right">
                    <UncontrolledButtonDropdown className="rt-t">
                      <DropdownToggle caret>
                        <MoreHorizontal size={15} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a">edit</DropdownItem>
                        <DropdownItem tag="a">delete</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </Col>
                </Row>
                <span>Created 20 min ago </span>

                <div>
                  <Button.Ripple
                    className="round my-2"
                    color="primary"
                    size="sm"
                    outline
                  >
                    lead
                  </Button.Ripple>
                </div>
                <div className="text-right">
                  <span>modified 20 min ago</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Goals;
