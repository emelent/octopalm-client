import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withState, compose, lifecycle} from 'recompose'
import cn from 'classnames'
import ToolBar from '../../components/ToolBar'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import MonFriView from '../../components/MonFriView'
import OptsMenu from '../../components/OptsMenu'
import SideMenu from '../../components/SideMenu'
import ModuleAccordion from '../../components/ModuleAccordion'
// import actions from '../../redux/actions/manager'
import timetableActions from '../../redux/actions/timetable'
// import {resolvedTimetable} from '../../api/dummy'
// import {Action} from '../../utils'
import './style.scss'


const options = [
	'Table S1',
	'CS Noob',
	'Y1 Yolo',
	'Freshman'
]

const RightSide = ({onMenuClick}) => (
	<div>
		<Icon onClick={onMenuClick} name="mdi mdi-menu -em2" />
	</div>
)

const LeftSide = ({onTableClick}) => (
	<Button onClick={onTableClick}
		className='is-primary is-outlined'
	>
		Timetable(1)
		<Icon name="ml1 mdi mdi-chevron-down"/>
	</Button>
)

const EditRight = () => (
	<div>
		<Icon name="mdi mdi-info -em2 mh2 gray" />
		<Icon name="mdi mdi-delete -em2 mh2 gray" />
		<Icon name="mdi mdi-check -em2 mh2 gray" />
	</div>
)
const MainToolBar = ({backClick, onTableClick, onMenuClick, ...props}) => (
	<ToolBar
		{...props}
		Icon={<Icon name="mdi mdi-arrow-left gray" onClick={backClick}/>}
		Right={<RightSide onMenuClick={onMenuClick} />}
		Left={<LeftSide onTableClick={onTableClick}/>}
	/>
)

const EditToolBar = ({active, onClose}) => (
	<ToolBar
		className="absolute left-0 z-1 -transition-ea"
		style={{top: active? '0px':'-100%'}}
		Icon={<Icon name="mdi mdi-close gray" onClick={onClose}/>}
		Right={<EditRight />}
	/>
)

const Manager = ({mook, edit, setEdit, tableSelect, setTableSelect, sideMenu, setSideMenu, timetable}) => (
	<div>
		<EditToolBar onClose={() => setEdit(false)} active={edit}/>
		<MainToolBar id="main"
			onTableClick={() => setTableSelect(true)}
			onMenuClick={() => setSideMenu(true)}
			backClick={mook}
		/>
		<MonFriView onClick={() => setEdit(true)} timetable={timetable}/>
		<OptsMenu options={options} title="Select Timetable"
			className={cn({'dn': !tableSelect})}
			onClose={() => setTableSelect(false)}
		/>
		<SideMenu onClose={() => setSideMenu(false)} active={sideMenu}>
			<div className="-side-bar-title">
				<Icon onClick={() => setSideMenu(false)}
					className="-em2 tc"
					name="mdi mdi-close"
				/>
				<span className="dib f3">Modules</span>
			</div>
			<ModuleAccordion />
		</SideMenu>
	</div>
)

const mapStateToProps = state => ({
	timetable: state.timetable.timetable
})

const mapDispatchToProps = dispatch => bindActionCreators({
	mook: timetableActions.fetchTimetable
}, dispatch)

const enhance = compose(
	withState('sideMenu', 'setSideMenu', false),
	withState('tableSelect', 'setTableSelect', false),
	withState('edit', 'setEdit', false),
	connect(mapStateToProps, mapDispatchToProps),
	lifecycle({
		componentDidMount(){
			// this.props.mook()
		}
	})
)
export default enhance(Manager)
