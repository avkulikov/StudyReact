import {connect} from 'react-redux'
import {auth} from '../actions/auth'
import Auth from '../components/Auth'


function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin)),
        }
}

export default connect(null, mapDispatchToProps)(Auth)