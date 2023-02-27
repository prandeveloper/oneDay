import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { MoreHorizontal, ChevronDown } from "react-feather";
import "../../../assets/scss/pages/campaign.scss";
import Select from "react-select";
import { modalFade } from "../../../components/reactstrap/modal/ModalSourceCode";
const showing = [
  { value: "all campaigns", label: "all campaign" },
  { value: "active campaigns", label: "active campaigns" },
  { value: "pauses campaigns", label: "pauses campaigns" },
  { value: "campaigns drafts", label: "campaigns drafts" },
];
const sortedBy = [
  { value: "modified date", label: "modified date" },
  { value: "created date", label: "created date" },
];
class Compaigns extends React.Component {
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
        <Row className="mb-2">
          <Col lg="4" md="4" sm="12">
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
          <Col lg="4" md="4">
            <div className="float-right">
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
                    Primary
                  </ModalHeader>
                  <ModalBody className="modal-dialog-centered">
                    Tart lemon drops macaroon oat cake chocolate toffee
                    chocolate bar icing. Pudding jelly beans carrot cake pastry
                    gummies cheesecake lollipop. I love cookie lollipop cake I
                    love sweet gummi bears cupcake dessert.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>
                      Accept
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
                Create Campaign
              </Button.Ripple>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12">
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
                        <DropdownItem tag="a">duplicate</DropdownItem>
                        <DropdownItem tag="a">pause</DropdownItem>
                        <DropdownItem tag="a">delete</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </Col>
                </Row>
                <span>Created 18 hours ago </span>
                <div className="card-btns d-flex justify-content-between mt-2">
                  <Button.Ripple color="primary" size="sm">
                    <ChevronDown size={15} />
                    $0
                  </Button.Ripple>
                  <Button.Ripple
                    className="round"
                    color="primary"
                    size="sm"
                    outline
                  >
                    active
                  </Button.Ripple>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Compaigns;
