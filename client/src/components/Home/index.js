import Home from './Home';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getItemsForProvider, getProviders} from '../../actions/homeActions';

const mapDispatchToProps = dispatch => ({
    getProviders: (history) => dispatch(getProviders(history)),
    getItemsForProvider: (history, provider) => dispatch(getItemsForProvider(history, provider)),
});

export default withRouter(connect(null, mapDispatchToProps)(Home))

