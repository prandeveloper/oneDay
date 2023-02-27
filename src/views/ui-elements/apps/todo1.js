import React from "react";
import {
  FormGroup,
  Input,
  Row,
  Col,
  Button,
  DropdownItem,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
} from "reactstrap";
import Select from "react-select";
import {
  Menu,
  Search,
  ChevronDown,
  MoreHorizontal,
  Check,
  Info,
  Star,
  Trash,
} from "react-feather";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { history } from "../../../history";
import {
  getTodos,
  completeTask,
  starTask,
  importantTask,
  trashTask,
  searchTask,
} from "../../../redux/actions/todo/index";
import "../../../assets/scss/pages/campaign.scss";

// const showing = [
//   { value: "all campaigns", label: "all campaign" },
//   { value: "active campaigns", label: "active campaigns" },
//   { value: "pauses campaigns", label: "pauses campaigns" },
//   { value: "campaigns drafts", label: "campaigns drafts" },
// ];
// const sortedBy = [
//   { value: "modified date", label: "modified date" },
//   { value: "created date", label: "created date" },
// ];
class TodoList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.app.todo.routeParam !== state.currentLocation) {
      return {
        todos: props.app.todo.todos,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
  state = {
    todos: [],
    handleUpdateTask: null,
    currentLocation: this.props.routerProps.location.pathname,
    value: "",
    activeTab: "1",
    modal: false,
    campaignName: "",
  };
  async componentDidMount() {
    await this.props.getTodos(this.props.routerProps.match.params);
    this.setState({
      todos: this.props.app.todo.todos,
      handleUpdateTask: this.props.handleUpdateTask,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.campaignName.length > 0) {
      history.push("/apps/editcampaigns");
      this.setState({ isValid: true });
    } else if (this.state.campaignName.length === 0) {
      this.setState({ isValid: false });
    }
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.searchTask(e.target.value);
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
    const { todos, handleUpdateTask, value } = this.state;
    let routerFilter = this.props.routerProps.match.params.filter;
    let todosArr = value.length ? this.props.app.todo.filteredTodos : todos;
    let renderTodos =
      todosArr.length > 0 ? (
        todosArr.map((todo, i) => {
          return (
            <li
              className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
              key={i}
              onClick={() => {
                handleUpdateTask(todo);
              }}
            >
              <div className="todo-title-wrapper d-flex justify-content-between mb-50">
                <div className="todo-title-area d-flex align-items-center">
                  <div className="title-wrapper d-flex">
                    <Checkbox
                      color="primary"
                      className="user-checkbox"
                      icon={<Check className="vx-icon" size={12} />}
                      label={""}
                      checked={todo.isCompleted}
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        this.props.completeTask(todo);
                      }}
                      onChange={(e) => e.stopPropagation()}
                    />
                    <h6 className="todo-title mt-50 mx-50">{todo.title}</h6>
                  </div>
                  {todo.tags.length > 0 ? (
                    <div className="chip-wrapper">
                      {todo.tags.map((tag, i) => (
                        <div className="chip mb-0" key={i}>
                          <div className="chip-body">
                            <span className="chip-text">
                              <span
                                className={`bullet bullet-${
                                  tag === "backend"
                                    ? "warning"
                                    : tag === "doc"
                                    ? "success"
                                    : tag === "bug"
                                    ? "danger"
                                    : "primary"
                                } bullet-xs`}
                              />
                              <span className="text-capitalize ml-25">
                                {tag}
                              </span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div
                  className={`todo-item-action d-flex ${
                    routerFilter === "trashed" ? "justify-content-end" : ""
                  }`}
                >
                  <div
                    className={`todo-item-info d-inline-block ${
                      routerFilter === "trashed" ? "mr-1" : "mr-1 mr-sm-0"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      this.props.importantTask(todo);
                    }}
                  >
                    <Info
                      size={17}
                      className={`${todo.isImportant ? "text-success" : ""}`}
                    />
                  </div>
                  <div
                    className="todo-item-favorite d-inline-block mr-1 mr-sm-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      this.props.starTask(todo);
                    }}
                  >
                    <Star
                      size={17}
                      className={`${todo.isStarred ? "text-warning" : ""}`}
                    />
                  </div>
                  {routerFilter !== "trashed" ? (
                    <div
                      className="todo-item-delete d-inline-block mr-1 mr-sm-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        this.props.trashTask(todo.id);
                      }}
                    >
                      <Trash size={17} />
                    </div>
                  ) : null}
                </div>
              </div>
              {todo.desc.length > 0 ? (
                <p className="todo-desc truncate mb-0">{todo.desc}</p>
              ) : (
                ""
              )}
            </li>
            // <Col lg="4" md="4" sm="12">
            //   <Card className="cardChange hi-1">
            //     <CardBody>
            //       <Row>
            //         <Col lg="6" sm="12">
            //           <h5>Abc</h5>
            //         </Col>
            //         <Col lg="6" sm="12" className="text-right">
            //           <UncontrolledButtonDropdown className="rt-t">
            //             <DropdownToggle caret>
            //               <MoreHorizontal size={15} />
            //             </DropdownToggle>
            //             <DropdownMenu>
            //               <DropdownItem tag="a">edit</DropdownItem>
            //               <DropdownItem tag="a">duplicate</DropdownItem>
            //               <DropdownItem tag="a">pause</DropdownItem>
            //               <DropdownItem tag="a">delete</DropdownItem>
            //             </DropdownMenu>
            //           </UncontrolledButtonDropdown>
            //         </Col>
            //       </Row>
            //       <span>Created 18 hours ago </span>
            //       <div className="card-btns d-flex justify-content-between mt-2">
            //         <Button.Ripple color="primary" size="sm">
            //           <ChevronDown size={15} />
            //           $0
            //         </Button.Ripple>
            //         <Button.Ripple
            //           className="round"
            //           color="primary"
            //           size="sm"
            //           outline
            //         >
            //           active
            //         </Button.Ripple>
            //       </div>
            //     </CardBody>
            //   </Card>
            // </Col>
          );
        })
      ) : (
        <p className="p-1 text-center mt-2 font-medium-3 text-bold-500">
          No tasks at this time
        </p>
      );

    return (
      <div className="content-right">
        <div className="todo-app-area">
          <div className="todo-app-list-wrapper">
            <div className="todo-app-list">
              <div className="app-fixed-search">
                <div
                  className="sidebar-toggle d-inline-block d-lg-none"
                  onClick={() => this.props.mainSidebar(true)}
                >
                  <Menu size={24} />
                </div>
                <FormGroup className="position-relative has-icon-left m-0 d-inline-block d-lg-block">
                  <Input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => this.handleOnChange(e)}
                    value={value}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </div>
              <PerfectScrollbar
                className="todo-task-list"
                options={{
                  wheelPropagation: false,
                }}
              >
                <Row className="my-1">
                  <Col lg="4" md="4" sm="12" className="ml-4">
                    <div className="d-flex mt-2">
                      {/* <div className="d-flex">
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
                      </div> */}
                      <div className="d-flex justify-content-around">
                        <div>
                          {" "}
                          <span>1 of 1 campaigns</span>
                        </div>
                        {/* <div className="pl-1">
                          <div>
                            <span>Sorted_by</span>
                          </div>
                        </div> */}
                        {/* <div className="selectData">
                          <Select
                            className="React customselect pl-1"
                            classNamePrefix="select"
                            defaultValue={sortedBy[0]}
                            name="color"
                            options={sortedBy}
                          />
                        </div> */}
                        {/* modal */}
                        <div className="ml-2">
                          <Button
                            color="primary"
                            className="btn-block"
                            onClick={this.toggleModal}
                          >
                            <Modal
                              isOpen={this.state.modal}
                              toggle={this.toggleModal}
                              className="modal-dialog-centered"
                            >
                              <ModalHeader
                                toggle={this.toggleModal}
                                className="bg-primary"
                              >
                                Build & launch a new campaign
                              </ModalHeader>
                              <ModalBody className="modal-dialog-centered">
                                <Form onSubmit={this.handleSubmit}>
                                  <Row>
                                    <Col md="10" sm="10" className="mb-2">
                                      <FormGroup>
                                        {/* <Label for="firstName">
                                          First Name
                                        </Label> */}
                                        {/* <h2> Build & launch a new campaign</h2> */}
                                        <Input
                                          type="text"
                                          required
                                          placeholder="Campaign Name"
                                          onChange={(e) =>
                                            this.setState({
                                              campaignName: e.target.value,
                                            })
                                          }
                                          value={this.state.campaignName}
                                          id="campaignName"
                                          name="campaignName"
                                          valid={this.state.isValid === true}
                                          invalid={this.state.isValid === false}
                                        />
                                        {this.state.isValid ? (
                                          <span className="valid-tooltip">
                                            Looks Good!
                                          </span>
                                        ) : this.state.isValid === false ? (
                                          <span className="invalid-tooltip">
                                            Please enter a Campaign Name
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </FormGroup>
                                    </Col>
                                    <Col md="2" sm="2" className="">
                                      <Button.Ripple
                                        color="primary"
                                        onClick={this.handleSubmit}
                                      >
                                        Next
                                      </Button.Ripple>
                                    </Col>
                                  </Row>
                                </Form>
                              </ModalBody>
                            </Modal>
                            Create_Campaign
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Table></Table>
                </Row>
                {/* <Row className="todo-task-list-wrapper mt-2">{renderTodos}</Row> */}
                <ul className="todo-task-list-wrapper">{renderTodos}</ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.todoApp,
  };
};
export default connect(mapStateToProps, {
  getTodos,
  completeTask,
  starTask,
  importantTask,
  trashTask,
  searchTask,
})(TodoList);
