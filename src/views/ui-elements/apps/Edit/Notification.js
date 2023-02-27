import React from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CardHeader,
  CardTitle,
  Input,
} from "reactstrap";
import { MoreHorizontal, ChevronDown } from "react-feather";
import "../../../../assets/scss/pages/campaign.scss";
import count from "../../../../assets/img/svg/CountPulse.svg";
import card from "../../../../assets/img/svg/card.svg";
import fire from "../../../../assets/img/svg/fire.svg";
import groupImg from "../../../../assets/img/svg/bulkpng.png";
// import "../../../../assets/scss/pages/campaign.scss";
import "../../../../assets/scss/pages/campaign.scss";
class Notification extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody className="p-0">
                <div className="firstCard">
                  <img src={groupImg} alt="groupImg" width={100} height={100} />
                  <div className="cardTitle">Recently Activity</div>
                  <p>
                    Show individual people that
                    <br /> recently signed up
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody className="p-0">
                <div className="firstCard">
                  <img src={count} alt="CountPulse" width={100} height={100} />
                  <div className="cardTitle">Live visitors count</div>
                  <p>
                    Show how many people are <br /> currently pn your page
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="12">
            <Card className="cardChange hi-1">
              <CardBody className="p-0">
                <div className="firstCard">
                  <img src={fire} alt="fire" width={100} height={100} />
                  <div className="cardTitle">HOT STEAKS</div>
                  <p>
                    Show the total visitors or <br /> signups over a period of
                    time
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* <h1 className="text-center">
            Make any optional customizations to your campaign below.
          </h1> */}
          <Col lg="6" md="6" sm="12">
            <Card className="cardChange hi-1">
              <CardHeader className="notifiCard">
                <CardTitle className="r">Appearance</CardTitle>
                <div></div>
              </CardHeader>
              <CardBody className="">
                <ul>
                  <li>Hide notifications on mobile</li>
                  <span> </span>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card className="cardChange hi-1">
              <CardHeader className="notifiCard">
                <CardTitle> Timing?</CardTitle>
              </CardHeader>
              <CardBody className="">
                <div className="d-flex my-1 ">
                  <div className="mr-1"> Delay the first notification for</div>
                  <div>
                    <span className="">
                      <Input
                        type="number"
                        placeholder="0"
                        style={{ paddingLeft: "2px", width: "3rem" }}
                      />
                    </span>
                  </div>
                  <span className="ml-1"> seconds</span>
                </div>
                <div className="d-flex my-1 ">
                  <div className="mr-1">Display each notification for</div>
                  <div>
                    <span className="">
                      <Input
                        type="number"
                        placeholder="7"
                        style={{ paddingLeft: "2px", width: "3rem" }}
                      />
                    </span>
                  </div>
                  <span className="ml-1"> seconds</span>
                </div>
                <div className="d-flex my-1">
                  <div className="mr-1">Space each notification</div>
                  <div>
                    <span className="">
                      <Input
                        type="number"
                        placeholder="3"
                        style={{ paddingLeft: "2px", width: "3rem" }}
                      />
                    </span>
                  </div>
                  <span className="ml-1"> seconds apart</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Notification;
