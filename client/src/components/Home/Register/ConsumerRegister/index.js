import ConsumerRegister from './ConsumerRegister';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        locationsError: state.locationsReducer.locationsError,
        locations: state.locationsReducer.locations
    }
};

export default connect(mapStateToProps, null)(ConsumerRegister)
