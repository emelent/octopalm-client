import React from 'react'
import {withState, compose} from 'recompose'
import cn from 'classnames'
import ToolBar from '../../components/ToolBar'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import MonFriView from '../../components/MonFriView'
import PillScroller from '../../components/PillScroller'
import OptsMenu from '../../components/OptsMenu'

const options = [
	'Table S1',
	'CS Noob',
	'Y1 Yolo',
	'Freshman'
]

const RightSide = () => (
	<div>
		
		<Icon name="mdi mdi-menu -em2" />
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
const MainToolBar = ({onTableClick, ...props}) => (
	<ToolBar
		{...props}
		Icon={<Icon name="mdi mdi-arrow-left gray" />}
		Right={<RightSide/>}
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

const Manager = ({edit, setEdit, tableSelect, setTableSelect}) => (
	<div>
		<EditToolBar onClose={() => setEdit(false)} active={edit}/>
		<MainToolBar id="main" onTableClick={() => setTableSelect(true)}/>
		<MonFriView onClick={() => setEdit(true)}/>
		<PillScroller className="fixed bottom-0"/>
		<OptsMenu options={options} title="Select Timetable"
			className={cn({'dn': !tableSelect})}
			onClose={() => setTableSelect(false)}
		/>
	</div>
)

const enhance = compose(
	withState('tableSelect', 'setTableSelect', false),
	withState('edit', 'setEdit', false),
	// withState('sideMenu', 'setSetMenu', false)
)
export default enhance(Manager)
