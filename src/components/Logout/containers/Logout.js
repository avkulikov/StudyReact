import {connect} from 'react-redux'
import Logout from '../components/Logout'
import {logOut} from '../../../pages/Auth/actions/auth'


function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(Logout)