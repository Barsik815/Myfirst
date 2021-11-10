import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };
    activateEditMode()  {
        this.setState({editMode: true})
    };
    deactivateEditMode() {
        this.setState({editMode: false})
    };

    render() {
        return <>
            {this.state.editMode
                ? <div><input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/></div>
                : <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span></div>
            }
        </>
    }
}

export default ProfileStatus