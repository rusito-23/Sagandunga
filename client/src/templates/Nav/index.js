import Navbar from './Navbar';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {userLogout} from '../../actions/userAuthActions';

const mapDispatchToProps = dispatch => ({
    userLogout: history => dispatch(userLogout(history)),
});

export default withRouter(connect(null, mapDispatchToProps)(Navbar))

