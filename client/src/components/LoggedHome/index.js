import Home from './LoggedHome';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

export default withRouter(connect(null, null)(Home))

