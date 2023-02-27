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
  Input,
} from "reactstrap";
import { MoreHorizontal, ChevronDown } from "react-feather";
import "../../../assets/scss/pages/campaign.scss";
// clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../assets/scss/plugins/extensions/toastr.scss";
// clipboard

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
class Pixel extends React.Component {
  state = {
    value: "Copy Me!",
    copied: false,
  };

  handleCopy = ({ target: { value } }) => {
    this.setState({ value, copied: false });
  };

  onCopy = () => {
    this.setState({ copied: true });
    toast.success("Text Copied Successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };
  render() {
    return (
      <>
        <div className="heading">
          <h1>Install My Pixel </h1>
          <p className="para">
            Follow the instructions below or ask a colleague to help.
          </p>
        </div>
        <div className="bottom-box">
          <Card className="">
            <CardBody>
              <Row>
                <Col lg="12" sm="12">
                  <h2 className="heading2">
                    1. Add this code to your site header
                  </h2>
                </Col>
              </Row>
              <div className="addCode">
                <p>
                  Add the code to all pages of your website in the section.
                  <a href="#"> Learn more.</a>
                </p>
              </div>
              <Row>
                <Col md="2" sm="12" className="pr-md-0 mb-1">
                  <Input value={this.state.value} onChange={this.handleCopy} />
                </Col>
                <Col md="2" sm="12" className="mb-1">
                  <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
                    <Button.Ripple color="primary">Copy Code</Button.Ripple>
                  </CopyToClipboard>
                  <ToastContainer />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
        <Row>
          <Col lg="12" md="12" sm="12" className="card2">
            <Card className="">
              <CardBody>
                <Row>
                  <Col lg="12" sm="12">
                    <h2 className="heading2">
                      2. Wait for data from your site
                    </h2>
                  </Col>
                </Row>
                <div className="addCode">
                  <p>
                    A status message will appear below when your pixel code has
                    been detected.
                  </p>
                </div>
                <div className="msgDiv">
                  <span>Your pixel is not yet sending data</span>
                </div>
                <div className="addCode">
                  <h2>Still no data?</h2>
                  <p>
                    Please read the pixel{" "}
                    <a href="#">troubleshooting article.</a>
                  </p>
                  <p>
                    If you're still having trouble please email us at
                    team@useproof.com
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Pixel;
