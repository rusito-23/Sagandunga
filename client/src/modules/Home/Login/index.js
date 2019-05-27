import Login from './Login';
import {connect} from 'react-redux';
import {userLogin} from "../../../actions/userAuthActions";

const mapStateToProps = (state) => {
    return {
        loginError: state.userAuthReducer.loginError
    }
};

const mapDispatchToProps = dispatch => ({
    loginUser: state => dispatch(userLogin(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
