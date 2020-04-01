import {connect} from 'react-redux'
import Layout from '../components/Layout'


function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)