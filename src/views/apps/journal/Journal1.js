import React from "react"
import Sidebar from "react-sidebar"
import JournalList from "./JournalList1"
import EmailSidebarContent from "./JournalSidebar"
import { ContextLayout } from "../../../utility/context/Layout"
import ComposeJournal from "./ComposeJournal"
import "../../../assets/scss/pages/app-email.scss"
const mql = window.matchMedia(`(min-width: 992px)`)
class Email extends React.Component {
    state = {
        composeMailStatus: false,
        sidebarDocked: mql.matches,
        sidebarOpen: false
    }
    handleComposeSidebar = status => {
        if (status === "open") {
            this.setState({
                composeMailStatus: true
            })
        } else {
            this.setState({
                composeMailStatus: false
            })
        }
    }

    UNSAFE_componentWillMount() {
        mql.addListener(this.mediaQueryChanged)
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged)
    }

    onSetSidebarOpen = open => {
        this.setState({ sidebarOpen: open })
    }

    mediaQueryChanged = () => {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
    }

    handleMainAndComposeSidebar = () => {
        this.handleComposeSidebar("close")
        this.onSetSidebarOpen(false)
    }

    render() {
        return (
            <div className="email-application position-relative">
                <div
                    className={`app-content-overlay ${this.state.composeMailStatus || this.state.sidebarOpen ? "show" : ""
                        }`}
                    onClick={this.handleMainAndComposeSidebar}
                />
                <ContextLayout.Consumer>
                    {context => (
                        <Sidebar
                            sidebar={
                                <EmailSidebarContent
                                    handleComposeSidebar={this.handleComposeSidebar}
                                    mainSidebar={this.onSetSidebarOpen}
                                    routerProps={this.props}
                                />
                            }
                            docked={this.state.sidebarDocked}
                            open={this.state.sidebarOpen}
                            sidebarClassName="sidebar-content email-app-sidebar d-flex"
                            touch={false}
                            contentClassName="sidebar-children"
                            pullRight={context.state.direction === "rtl"}>
                            ""
                        </Sidebar>
                    )}
                </ContextLayout.Consumer>
                <JournalList
                    mainSidebar={this.onSetSidebarOpen}
                    routerProps={this.props}
                />
                <ComposeJournal
                    handleComposeSidebar={this.handleComposeSidebar}
                    currentStatus={this.state.composeMailStatus}
                />
            </div>
        )
    }
}
export default Email
