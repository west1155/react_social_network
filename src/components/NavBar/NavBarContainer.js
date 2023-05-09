import NavBar from "./NavBar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, null)(NavBar)
