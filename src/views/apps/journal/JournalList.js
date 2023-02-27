import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import { Card, Container } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
import Buyimg from "../../../assets/img/pages/card-img-overlay.jpg";

// import Countdown from "react-countdown";
const colourOptions = [
  { value: "Media View", label: "Media View" },
  { value: "List View", label: "List View" },
  { value: "Calender View", label: "Calender View" },
];
class JournalList extends React.Component {
  render() {
    return (
      <>
        <ul>
          <span>
            <Select
              onChange={this.handleChange}
              className="React customSelect"
              classNamePrefix="select"
              defaultValue={colourOptions[0]}
              name="color"
              options={colourOptions}
            />
          </span>
        </ul>

        <h4 className="calendertextmain">Feb 2023</h4>
        <section className="sectionjournalheading">
          <div className="mainjouralborder">
            <div className="lst-con datetimejournal">
              <div className="date ">
                <Card className="dateincard time borderStyle">
                  <h6 className="dayofcard">Tue </h6>
                  <h2 className="dateincard">19</h2>
                </Card>
              </div>

              <hr />

              <div className="mid-text">
                <h5> What is journal?</h5>
                <p className="journalanser">
                  The articles are about a particular subject{" "}
                </p>
                <p>
                  <small className="timeincard">
                    04:32 PM IST New Delhi India
                  </small>
                </p>
              </div>
              <hr />
              <div className="imglf">
                <img src={Buyimg} className="app-img" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sectionjournalheading">
          <div className="mainjouralborder">
            <div className="lst-con datetimejournal">
              <div className="date">
                <Card className="dateincard time">
                  <h6 className="dayofcard">Tue </h6>
                  <h2 className="dateincard">19</h2>
                </Card>
              </div>

              <hr />

              <div className="mid-text">
                <h5> What is journal?</h5>
                <p className="journalanser">
                  The articles are about a particular subject{" "}
                </p>
                <p>
                  <small className="timeincard">
                    04:32 PM IST New Delhi India
                  </small>
                </p>
              </div>
              <hr />
              <div className="imglf">
                <img src={Buyimg} className="app-img" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sectionjournalheading">
          <div className="mainjouralborder">
            <div className="lst-con datetimejournal">
              <div className="date">
                <Card className="dateincard time">
                  <h6 className="dayofcard">Tue </h6>
                  <h2 className="dateincard">18</h2>
                </Card>
              </div>

              <hr />

              <div className="mid-text">
                <h5> What is journal?</h5>
                <p className="journalanser">
                  The articles are about a particular subject{" "}
                </p>
                <p>
                  <small className="timeincard">
                    04:32 PM IST New Delhi India
                  </small>
                </p>
              </div>
              <hr />
              <div className="imglf">
                <img src={Buyimg} className="app-img" alt="" />
              </div>
            </div>
          </div>
        </section>
        <h4 className="calendertextmain">jan 2023</h4>
        <section className="sectionjournalheading">
          <div className="mainjouralborder">
            <div className="lst-con datetimejournal">
              <div className="date">
                <Card className="dateincard time">
                  <h6 className="dayofcard">Tue </h6>
                  <h2 className="dateincard">18</h2>
                </Card>
              </div>

              <hr />

              <div className="mid-text">
                <h5> What is journal?</h5>
                <p className="journalanser">
                  The articles are about a particular subject{" "}
                </p>
                <p>
                  <small className="timeincard">
                    04:32 PM IST New Delhi India
                  </small>
                </p>
              </div>
              <hr />
              <div className="imglf">
                <img src={Buyimg} className="app-img" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sectionjournalheading">
          <div className="mainjouralborder">
            <div className="lst-con datetimejournal">
              <div className="date">
                <Card className="dateincard time">
                  <h6 className="dayofcard">Tue </h6>
                  <h2 className="dateincard">17</h2>
                </Card>
              </div>

              <hr />

              <div className="mid-text">
                <h5> What is journal?</h5>
                <p className="journalanser">
                  The articles are about a particular subject{" "}
                </p>
                <p>
                  <small className="timeincard">
                    04:32 PM IST New Delhi India
                  </small>
                </p>
              </div>
              <hr />
              <div className="imglf">
                <img src={Buyimg} className="app-img" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sectionjournalheading">
          <div className="mainjouralborder">
            <div className="lst-con datetimejournal">
              <div className="date">
                <Card className="dateincard time">
                  <h6 className="dayofcard">Tue </h6>
                  <h2 className="dateincard">16</h2>
                </Card>
              </div>

              <hr />

              <div className="mid-text">
                <h5> What is journal?</h5>
                <p className="journalanser">
                  The articles are about a particular subject{" "}
                </p>
                <p>
                  <small className="timeincard">
                    04:32 PM IST New Delhi India
                  </small>
                </p>
              </div>
              <hr />
              <div className="imglf">
                <img src={Buyimg} className="app-img" alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default JournalList;