import ProvidersList from './ProvidersList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
    return {
        providersError: state.homeReducer.providersError,
        providers: state.homeReducer.providers,
    }
};

export default withRouter(connect(mapStateToProps, null)(ProvidersList))
