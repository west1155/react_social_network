import React from "react";

class ProfileStatus extends React.Component<React,React> {
    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }

    offEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== prevState.status) {
            this.setState({status: this.props.status})
        }
    }


    render() {
        return <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.onEditMode}>{this.state.status}</span>
                </div>
                : <div>
                    <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.offEditMode}
                           value={this.state.status}></input>
                </div>
            }
        </div>
    }
}

export default ProfileStatus