import React from "react";

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status
    };
    activateEditMode = () => {
        this.setState({editMode: true})
    };
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log("componentDidUpdate")
    }

    render() {
        return <>
            {this.state.editMode
                ? <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                              value={this.state.status}/></div>
                : <div><span onDoubleClick={this.activateEditMode}>{this.props.status || "No Status"}</span></div>
            }
        </>
    }
}

export default ProfileStatus