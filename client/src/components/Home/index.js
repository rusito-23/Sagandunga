import Home from './Home';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
    return {
        registrationSuccess: state.registerReducer.registrationSuccess
    }
};

export default withRouter(connect(mapStateToProps, null)(Home))
