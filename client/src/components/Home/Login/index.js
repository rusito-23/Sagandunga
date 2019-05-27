import Login from './Login';
import {connect} from 'react-redux';
import {userLogin} from '../../../actions/userAuthActions';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
    return {
        loginError: state.userAuthReducer.loginError,
        user: state.userAuthReducer.user
    }
};

const mapDispatchToProps = dispatch => ({
    loginUser: state => dispatch(userLogin(state)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
