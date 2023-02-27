import React from "react";
import { Col, Row, Button, Container, Modal, ModalHeader, ModalBody } from "reactstrap";
// import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
// import { FcAddImage } from "react-icons/fc";
import { BsCamera } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TbFilePencil } from "react-icons/tb";
import Dropzone from "react-dropzone";

import "../../../assets/scss/pages/astrochat.scss";
import Buyimg from "../../../assets/img/pages/card-img-overlay.jpg";
import ReactEditor from "./constants/ReactEditor";

// import Countdown from "react-countdown";

class JournalDetails extends React.Component {
  state = {
    uploadfile: "",
  };

  onDrop = (acceptedFiles) => {
    this.setState({ acceptedfilupload: acceptedFiles[0] });
    // console.log(acceptedFiles[0]);
    if (acceptedFiles.length > 0) {
      this.setState({
        uploadfile: acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    const maxSize = 1 * 1024 * 1024;
    return (
      <>
        <div className="chat-header dateheadtimelast">
          <Row>
            <p>Date - 23/02/2023 time - 2:00</p>
            <Col></Col>
            <Col>
              <p className="addnewcatmain ">
                <AiOutlinePlusSquare
                  size={25}
                  // onClick={() => this.handleAddJournal("Open")}
                  onClick={this.toggle}
                  className="categorybtntext mb-2"
                >
                  +Journal
                </AiOutlinePlusSquare>
              </p>
            </Col>
          </Row>
        </div>
        <div className="chat-header dateheadtimelast">
          <Container>
            <Row>
              <Col md="12">
                <div className="view-img">
                  <img
                    contentEditable
                    src={Buyimg}
                    className="view-img"
                    alt=""
                  />
                </div>
              </Col>
              <Col md="12">
                <ReactEditor />
              </Col>
            </Row>
          </Container>
        </div>
        {/* model */}
        <div>
          {/* <Button color="danger" >
            {this.props.buttonLabel}
          </Button> */}
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  }
}

//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default JournalDetails;
