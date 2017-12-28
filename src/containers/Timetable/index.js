import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../../redux/actions/timetable'
import Connector from '../../components/StoreConnector'

const mapStateToProps = ({timetable}) => timetable

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchTimetable: actions.fetchTimetable,
	clearError: actions.clearTimetableError
}, dispatch)

export const TimetableState = connect(mapStateToProps)(Connector)
export const TimetableDispatch = connect(null, mapDispatchToProps)(Connector)
export const TimetableConnect = connect(mapStateToProps, mapDispatchToProps)(Connector)