import ProviderRegister from './ProviderRegister';
import {connect} from 'react-redux';
import {providerRegister} from '../../../../actions/registerActions';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
    return {
        locations: state.locationsReducer.locations,
        registrationError: state.registerReducer.registrationError,
        registrationErrorMessage: state.registerReducer.registrationErrorMessage
    }
};

const mapDispatchToProps = dispatch => ({
    providerRegister: (state, history) => dispatch(providerRegister(state, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProviderRegister))
