import React from 'react'
import ReactDOM from 'react-dom'
import Component from './'

renderTest(<Component/>)

it("renders based on received timetable", () => {
	const NoTimetable = shallow(<Component />)
	const WithTimetable = shallow(<Component timetable={{}} />)
	
	expect(NoTimetable.html().indexOf('-without-timetable')).not.toBe(-1)
	expect(WithTimetable.html().indexOf('-with-timetable')).not.toBe(-1)
})
