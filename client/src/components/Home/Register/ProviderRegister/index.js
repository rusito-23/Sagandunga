import ProviderRegister from './ProviderRegister';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        locationsError: state.locationsReducer.locationsError,
        locations: state.locationsReducer.locations
    }
};

export default connect(mapStateToProps, null)(ProviderRegister)
