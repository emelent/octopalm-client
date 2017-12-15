import React from 'react'
import ReactDOM from 'react-dom'
import {spy} from 'sinon'
import Component from './'


it("It renders without crashing", () => {
	const div = document.createElement('div')
	ReactDOM.render(<Component />, div)
})

it("It runs onClose when overlay is clicked", () => {
	const onClose = spy()
	const wrapper = shallow(<Component onClose={onClose} />)
	wrapper.find('.-overlay').simulate('click')
	expect(onClose.called).toBe(true)
})