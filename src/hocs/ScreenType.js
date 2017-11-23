import {connect} from 'react-redux'


const mapStateToProps = state => ({
	screenType: state.ui.screenType
})
const ScreenType = connect(mapStateToProps)


export default ScreenType
