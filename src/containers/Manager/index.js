import React from 'react'
import {withState, compose} from 'recompose'
import cn from 'classnames'
import ToolBar from '../../components/ToolBar'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import MonFriView from '../../components/MonFriView'
import OptsMenu from '../../components/OptsMenu'
import SideMenu from '../../components/SideMenu'
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
const MainToolBar = ({onTableClick, onMenuClick, ...props}) => (
	<ToolBar
		{...props}
		Icon={<Icon name="mdi mdi-arrow-left gray" />}
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

const Manager = ({edit, setEdit, tableSelect, setTableSelect, sideMenu, setSideMenu}) => (
	<div>
		<EditToolBar onClose={() => setEdit(false)} active={edit}/>
		<MainToolBar id="main"
			onTableClick={() => setTableSelect(true)}
			onMenuClick={() => setSideMenu(true)}
		/>
		<MonFriView onClick={() => setEdit(true)}/>
		<OptsMenu options={options} title="Select Timetable"
			className={cn({'dn': !tableSelect})}
			onClose={() => setTableSelect(false)}
		/>
		<SideMenu active={sideMenu}>
			<div className="-side-bar-title">
				<Icon onClick={() => setSideMenu(false)}
					className="-em2 tc"
					name="mdi mdi-close"
				/>
				<span className="dib f3">Modules</span>
			</div>
			<div className="ph2 f4">
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
				<div>Item 5</div>
				<div>Item 6</div>
			</div>
		</SideMenu>
	</div>
)

const enhance = compose(
	withState('sideMenu', 'setSideMenu', true),
	withState('tableSelect', 'setTableSelect', false),
	withState('edit', 'setEdit', false),
)
export default enhance(Manager)
