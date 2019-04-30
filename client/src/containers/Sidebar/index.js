import { connect } from 'react-redux'
import Sidebar from './Component'


const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps)(Sidebar)