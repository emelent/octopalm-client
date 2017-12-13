import React from 'react'
import {spy} from 'sinon'
import toJson from 'enzyme-to-json'

import ToolBar from './'

it("It should run onIconClick when the Icon is clicked", () =>{
	const Icon = () => <span>Icon</span>
	const onClick = spy()
	const wrapper = shallow(<ToolBar Icon={Icon} onIconClick={onClick} />)
	expect(wrapper.contains(<Icon />)).toBe(true)
	wrapper.find('.-toolbar-icon').simulate('click')
	expect(onClick.called).toBe(true)
})