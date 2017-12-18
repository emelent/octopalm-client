import React from 'react'
import {spy} from 'sinon'
import ToolBar from './'

renderTest(<ToolBar/>)

it("It calls onIconClick when the Icon is clicked", () =>{
	const onClick = spy()
	const wrapper = shallow(<ToolBar Icon={<span />} onIconClick={onClick} />)
	wrapper.find('.-toolbar-icon').simulate('click')
	expect(onClick.called).toBe(true)
})