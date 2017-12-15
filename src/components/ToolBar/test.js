import React from 'react'
import ReactDOM from 'react-dom'
import {spy} from 'sinon'
import ToolBar from './'


const Icon = () => <span>Icon</span>

it("It renders without crashing", () => {
	const div = document.createElement('div')
	ReactDOM.render(<ToolBar Icon={<Icon />} />, div)
})


it("It calls onIconClick when the Icon is clicked", () =>{
	const onClick = spy()
	const wrapper = shallow(<ToolBar Icon={<Icon />} onIconClick={onClick} />)
	wrapper.find('.-toolbar-icon').simulate('click')
	expect(onClick.called).toBe(true)
})