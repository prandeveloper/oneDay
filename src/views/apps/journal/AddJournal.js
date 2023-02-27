import React from "react";
import { Col, Label, Row, Button } from "reactstrap";

class AddJournal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container">
          <Row className="createjounal label">
            <h4 className="newjournalcreatl">Create New Journal</h4>
          </Row>
          <Row>
            <Col className="labeland textarea" lg="3">
              <div className="textarea">
                <Label>Title</Label>
              </div>
            </Col>
            <Col className="labeland textarea" lg="6">
              <div className="textarea">
                {/*  */}
                <input type="text" className="form-control" />
                {/* <input type="date" className="form-control" /> */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="labeland textarea" lg="3">
              <div className="textarea">
                <Label>Choose Date</Label>
              </div>
            </Col>
            <Col className="labeland textarea" lg="6">
              <div className="textarea">
                <input type="date" className="form-control" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="labeland textarea" lg="3">
              <div className="textarea">
                <Label>Descriptions</Label>
              </div>
            </Col>
            <Col className="labeland textarea" lg="6">
              <div className="textarea">
                <textarea className="form-control" rows={5} col={25}></textarea>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="3"></Col>
            <Col lg="2">
              <span>
                <input type="file" />
              </span>
            </Col>
            <Col lg="2">
              <span>
                <input type="file" />
              </span>
            </Col>
            <Col lg="2">
              <span>
                <input type="file" />
              </span>
            </Col>
            <Col lg="3"></Col>
          </Row>
          <Row className="btncenter">
            <div className="submitbtn">
              <Button className="categorybtntext submitbtn">Submit</Button>
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default AddJournal;
