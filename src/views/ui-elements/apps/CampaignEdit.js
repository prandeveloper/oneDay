// ** React Imports
import React, { Fragment, useState } from "react";
// ** Reactstrap Imports

import { Card, CardBody, Row, Col } from "reactstrap";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
// ** Icons Imports
import { Calendar, File, Plus, Settings, Users } from "react-feather";

// import Breadcrumbs from "@components/breadcrumbs";

// ** User Components
import classnames from "classnames";
import CreateGoal from "./Edit/CreateGoal";
import Notification from "../apps/Edit/Notification";
import CaptureData from "./Edit/CaptureData";
import DisplaySite from "./DisplaySite";

const CampaignEdit = () => {
  const [active, setActive] = useState("1");
  const toggleTab = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  return (
    <>
      <Row>
        <Col xl="12" xs={{ order: 0 }} md={{ order: 1, size: 12 }}>
          <Fragment>
            <Nav pills className="mb-2">
              <NavItem>
                <NavLink active={active === "1"} onClick={() => toggleTab("1")}>
                  <Users className="font-medium-1 me-50" />
                  <span className="fs-6">My Employee</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={active === "2"} onClick={() => toggleTab("2")}>
                  <Plus className="font-medium-1 me-50" />
                  {/* <span className="fs-6">My Forms</span> */}
                  <span className="fs-6">Employee Tasks</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={active === "3"} onClick={() => toggleTab("3")}>
                  <Calendar className="font-medium-1 me-50" />
                  <span className="fs-6">CaptureData</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={active === "4"} onClick={() => toggleTab("4")}>
                  <File className="font-medium-1 me-50" />
                  <span className="fs-6">Work History</span>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink active={active === "5"} onClick={() => toggleTab("5")}>
                  <Settings className="font-medium-1 me-50" />
                  <span className="fs-6">Setting</span>
                </NavLink>
              </NavItem> */}
            </Nav>

            <TabContent activeTab={active}>
              <TabPane tabId="1">
                <CreateGoal />
              </TabPane>
              <TabPane tabId="2">
                <Notification />
              </TabPane>
              <TabPane tabId="3">
                <CaptureData />
              </TabPane>
              <TabPane tabId="4">
                <DisplaySite />
              </TabPane>
              {/* <TabPane tabId="5">
                <Setting />
              </TabPane> */}
            </TabContent>
          </Fragment>
        </Col>
      </Row>
    </>
  );
};
export default CampaignEdit;

// import React from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Nav,
//   NavItem,
//   NavLink,
//   TabContent,
//   TabPane,
// } from "reactstrap";
// import classnames from "classnames";
// import CreateGoal from "./Edit/CreateGoal";
// import Notification from "../apps/Edit/Notification";
// import CaptureData from "./Edit/CaptureData";
// import DisplaySite from "./DisplaySite";
// class CampaignEdit extends React.Component {
//   state = {
//     activeTab: "1",
//   };

//   toggle = (tab) => {
//     this.setState({
//       activeTab: tab,
//     });
//   };
//   render() {
//     return (
//       <Row>
//         <Col lg="12">
//           <Card>
//             <div className="pl-2 pt-2 font-weight-bold">Create Campaign</div>
//             <CardBody className="pt-2">
//               <Nav tabs>
//                 <NavItem>
//                   <NavLink
//                     className={classnames({
//                       active: this.state.activeTab === "1",
//                     })}
//                     onClick={() => {
//                       this.toggle("1");
//                     }}
//                   >
//                     <span className="align-middle ml-50">
//                       (1) CONFIRM PIXEL
//                     </span>
//                   </NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink
//                     className={classnames({
//                       active: this.state.activeTab === "2",
//                     })}
//                     onClick={() => {
//                       this.toggle("2");
//                     }}
//                   >
//                     <span className="align-middle ml-50">
//                       (2) CREATE GOAL AND SET GOAL
//                     </span>
//                   </NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink
//                     className={classnames({
//                       active: this.state.activeTab === "3",
//                     })}
//                     onClick={() => {
//                       this.toggle("3");
//                     }}
//                   >
//                     <span className="align-middle ml-50">
//                       (3) NOTIFICATIONS
//                     </span>
//                   </NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink
//                     className={classnames({
//                       active: this.state.activeTab === "4",
//                     })}
//                     onClick={() => {
//                       this.toggle("4");
//                     }}
//                   >
//                     <span className="align-middle ml-50">(4) DISPLAY</span>
//                   </NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink
//                     className={classnames({
//                       active: this.state.activeTab === "4",
//                     })}
//                     onClick={() => {
//                       this.toggle("4");
//                     }}
//                   >
//                     <span className="align-middle ml-50">(5) PUBLISH</span>
//                   </NavLink>
//                 </NavItem>
//               </Nav>
//             </CardBody>
//           </Card>
//         </Col>

//         <Col lg="12" className="mt-1">
//           <Card>
//             <CardBody className="pt-2">
//               <TabContent activeTab={this.state.activeTab}>
//                 <TabPane tabId="1">
//                   <CreateGoal />
//                 </TabPane>
//                 <TabPane tabId="2">
//                   <CaptureData />
//                 </TabPane>
//                 <TabPane tabId="3">
//                   <Notification />
//                 </TabPane>
//                 <TabPane tabId="4">
//                   <DisplaySite />
//                 </TabPane>
//               </TabContent>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     );
//   }
// }
// export default CampaignEdit;
