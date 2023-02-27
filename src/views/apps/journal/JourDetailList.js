import React from "react";
import { Edit } from "react-feather";
import { Link } from "react-router-dom";
import { FormGroup, Button, Row, Container } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
// import Buyimg from "../../../assets/img/boy-img.png";
// import Countdown from "react-countdown";

class JourDetailList extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <div className="lst-con">
              <p className="journalstext">Journal </p>
              {/* <p>lorem</p> */}
            </div>
          </li>

          {/* <FormGroup className="form-group-compose text-center compose-btn">
            <Button.Ripple
              block
              className="my-2 btn-block"
              color="primary"
              onClick={() => {
                this.props.handleComposeSidebar("open");
                this.props.mainSidebar(false);
              }}
            >
              <Edit size={14} />
              <span className="align-middle ml-10">+New Journal</span>
            </Button.Ripple>
          </FormGroup> */}
          <p className="addnewcatmain ">
            <Button className="categorybtntext">+New Journal</Button>
          </p>
          <li className="mt-3">
            <h5 className="textstyle"> All (5)</h5>
            {/* <p>lorem</p> */}

            <h5 className="textstyle"> Personal</h5>
            {/* <p>lorem</p> */}

            <h5 className="textstyle"> Business</h5>
            {/* <p>lorem</p> */}

            <h5 className="textstyle"> Notes</h5>
            {/* <p>lorem</p> */}
            {/* </div> */}
          </li>

          <p className="addnewcatmain ">
            <Button className="categorybtntext">+Add New Category</Button>
          </p>
        </ul>
      </>
    );
  }
}

//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default JourDetailList;
