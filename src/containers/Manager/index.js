import React from 'react'
import {withState} from 'recompose'

import ToolBar from '../../components/ToolBar'
import Icon from '../../components/Icon'
import Button from '../../components/Button'


const RightSide = () => (
	<Button className='is-primary is-outlined'
	>
		Timetable(1) <Icon name="mdi mdi-chevron-down"/>
	</Button>
)

const LeftSide = () => (
	<span>Timetable Editor</span>
)

const EditRight = () => (
	<div>
		<Icon name="mdi mdi-undo -em2 mh2 gray" />
		<Icon name="mdi mdi-delete -em2 mh2 gray" />
		<Icon name="mdi mdi-check -em2 mh2 gray" />
	</div>
)
const MainToolBar = props => (
	<ToolBar
		{...props}
		Icon={<Icon name="mdi mdi-arrow-left gray" />}
		Right={<RightSide/>}
		Left={<LeftSide />}
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
const Manager = ({edit, setEdit}) => (
	<div>
		{console.log('edit:', edit)}
		<EditToolBar onClose={() => setEdit(false)} active={edit}/>
		<MainToolBar id="main" onClick={() => setEdit(true)}/>
	</div>
)

export default withState('edit', 'setEdit', false)(Manager)
