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


const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)