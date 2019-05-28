import Register from './Register';
import {connect} from 'react-redux';
import {getLocations} from '../../../actions/locationsActions';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
    return {
        locationLoading: state.locationsReducer.locationLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getLocations: () => dispatch(getLocations()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))
