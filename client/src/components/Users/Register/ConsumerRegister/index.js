import ConsumerRegister from './ConsumerRegister';
import {connect} from 'react-redux';
import {consumerRegister} from '../../../../actions/registerActions';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
    return {
        locations: state.locationsReducer.locations,
        registrationError: state.registerReducer.registrationError,
        registrationErrorMessage: state.registerReducer.registrationErrorMessage
    }
};

const mapDispatchToProps = dispatch => ({
    consumerRegister: (state, history) => dispatch(consumerRegister(state, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConsumerRegister))
