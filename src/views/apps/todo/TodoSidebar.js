import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { X, Layers, Star, Info, Check, Trash, User } from "react-feather";
import { connect } from "react-redux";
import { changeFilter } from "../../../redux/actions/todo/index";
import { history } from "../../../history";
class TodoSidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        {console.log("getting props", this.props.routerProps.location)}
        <span
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={15} />
        </span>
        <div className="todo-app-menu">
          {/* <div className="add-task">
            <Button.Ripple
              block
              className="btn-block my-1"
              color="primary"
              onClick={() => {
                this.props.addTask("open");
                this.props.mainSidebar(false);
              }}
            >
              Add Task
            </Button.Ripple>
          </div> */}
          <PerfectScrollbar
            className="sidebar-menu-list"
            options={{
              wheelPropagation: false,
            }}
          >
            <ListGroup className="font-medium-1">
              <ListGroupItem
                className="border-0 pt-0"
                action
                onClick={() => {
                  this.props.changeFilter("all");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/all"
                    ? true
                    : false
                }
              >
                <Layers size={22} />
                <span className="align-middle ml-1">All</span>
              </ListGroupItem>
            </ListGroup>
            <hr />
            <h5 className="mt-2 mb-1 pt-25">Tabs</h5>
            <ListGroup className="font-medium-1">
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("starred");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/starred"
                    ? true
                    : false
                }
              >
                <Star size={22} />
                <span className="align-middle ml-1">Campaigns</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("completed");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/completed"
                    ? true
                    : false
                }
              >
                <Check size={22} />
                <span className="align-middle ml-1">Statistics</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("trashed");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/trashed"
                    ? true
                    : false
                }
              >
                <User size={22} />
                <span className="align-middle ml-1">Help Center</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  history.push("/todo/positiontable");
                }}
              >
                <User size={22} />
                <span className="align-middle ml-1">Position</span>
              </ListGroupItem>
            </ListGroup>
            <hr />
          </PerfectScrollbar>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { changeFilter })(TodoSidebar);
