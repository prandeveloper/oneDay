// CaptureData
import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import Notification from "./Notification";
import "../../../../assets/scss/pages/users.scss";
import Auto from "./capture/Auto";
import Zopier from "./capture/Zopier";
import WebHook from "./capture/WebHook";
import { Info } from "react-feather";
class CaptureData extends React.Component {
  state = {
    activeTab: "1",
  };

  toggle = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center">
          How would you like to capture conversions?
        </h1>
        <Row>
          <Col lg="12">
            <Card className="text-center box-shadow">
              <CardBody className="pt-2">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "1",
                      })}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      <span className="align-middle ml-50">
                        <Info size={16} /> Auto
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "2",
                      })}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      <Info size={16} />
                      <span className="align-middle ml-50">Zopier</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "3",
                      })}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      <Info size={16} />
                      <span className="align-middle ml-50">Web Hook</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Col>

          <Col lg="12" className="mt-1">
            <Card className="box-shadow">
              <CardBody className="pt-2">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Auto />
                  </TabPane>
                  <TabPane tabId="2">
                    <Zopier />
                  </TabPane>
                  <TabPane tabId="3">
                    <WebHook />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default CaptureData;
