import {pickRandom} from '../utils'

const modules = [
	{
		"_id": "59c25b8cb0847c4ecfed56d6",
		"code": "WTW 114",
		"name": "CALCULUS I",
		"period": "S1",
		"lessons": 3
	},
	{
		"_id": "59c25ba7b0847c4ecfed56d7",
		"code": "COS 132",
		"name": "IMPERATIVE PROGRAMMING",
		"period": "S1",
		"lessons": 3
	},
	{
		"_id": "59c25bbfb0847c4ecfed56d8",
		"code": "ALL 121",
		"name": "ACADEMIC LITERACY",
		"period": "S2",
		"lessons": 2
	}
]

const events = [
	{
		"_id": "5a0d628d905f909cf41b0581",
		"module_id": "5a0d628c905f909cf41b0571",
		"name": "L1",
		"language": "E",
		"day": "WEDNESDAY",
		"start": "13:30",
		"end": "14:20",
		"venue": "5a0d628d905f909cf41b057f"
	},
	{
		"_id": "5a0d628d905f909cf41b0582",
		"module_id": "5a0d628d905f909cf41b0572",
		"name": "L2",
		"language": "E",
		"day": "THURSDAY",
		"start": "13:30",
		"end": "14:20",
		"venue": "5a0d628d905f909cf41b057c"
	},
	{
		"_id": "5a0d628d905f909cf41b0586",
		"module_id": "5a0d628d905f909cf41b0573",
		"name": "L2",
		"language": "E",
		"day": "WEDNESDAY",
		"start": "15:30",
		"end": "16:20",
		"venue": "5a0d628d905f909cf41b057c"
	},
	{
		"_id": "5a0d628d905f909cf41b0583",
		"module_id": "5a0d628d905f909cf41b0573",
		"name": "L3",
		"language": "E",
		"day": "FRIDAY",
		"start": "11:30",
		"end": "12:20",
		"venue": "5a0d628d905f909cf41b057f"
	},
	{
		"_id": "5a0d628d905f909cf41b0584",
		"module_id": "5a0d628c905f909cf41b0571",
		"name": "L3",
		"language": "E",
		"day": "FRIDAY",
		"start": "11:30",
		"end": "12:20",
		"venue": "5a0d628d905f909cf41b057a"
	},
	{
		"_id": "5a0d628d905f909cf41b0585",
		"module_id": "5a0d628c905f909cf41b0571",
		"name": "L1",
		"language": "E",
		"day": "MONDAY",
		"start": "11:30",
		"end": "12:20",
		"venue": "5a0d628d905f909cf41b057f"
	}
]

const resolvedTimetable = {
	_id: "5a0d64357a94999e0d9156ba",
	name: "Egyptian Pound e-business",
	author_id: "5a0d64357a94999e0d9156aa",
	events,
	modules
}
const timetables = [
	{
		"_id": "5a0d64958c5d049e47380dbc",
		"name": "invoice capacitor",
		"author_id": "5a0d64958c5d049e47380daa",
		"events": [
			"5a0d64958c5d049e47380db7",
			"5a0d64958c5d049e47380dba",
			"5a0d64958c5d049e47380dbb",
			"5a0d64958c5d049e47380db6",
			"5a0d64958c5d049e47380db9"
		],
		"modules": [
			"5a0d64958c5d049e47380da6",
			"5a0d64958c5d049e47380da8"
		]
	},
	{
		"_id": "5a0d64958c5d049e47380dbd",
		"name": "Accountability explicit",
		"author_id": "5a0d64958c5d049e47380da9",
		"events": [
			"5a0d64958c5d049e47380db9",
			"5a0d64958c5d049e47380db8",
			"5a0d64958c5d049e47380db7",
			"5a0d64958c5d049e47380dba",
			"5a0d64958c5d049e47380dbb"
		],
		"modules": [
			"5a0d64958c5d049e47380da6",
			"5a0d64958c5d049e47380da8"
		]
	}
]

const venues = [
	{
		"_id": "59c26ad25e41745996517276",
		"name": "IT 4-1"
	},
	{
		"_id": "59c26ad65e41745996517277",
		"name": "IT 4-2"
	},
	{
		"_id": "59c26ad85e41745996517278",
		"name": "IT 4-3"
	},
	{
		"_id": "59c26adb5e41745996517279",
		"name": "IT 4-4"
	},
	{
		"_id": "59c26add5e4174599651727a",
		"name": "IT 4-5"
	}
]

const users = [
	{
		"_id": "5a0d768c0388f6ad671fe963",
		"name": "Juza",
		"student_id": "12345678",
		"modules": [
			"5a0d768c0388f6ad671fe960",
			"5a0d768c0388f6ad671fe961",
			"5a0d768c0388f6ad671fe962"
		],
		"timetables": [
			"5a0d768d0388f6ad671fe97a"
		],
		"active_timetable": "5a0d768d0388f6ad671fe97a",
		"timetable_aliases": []
	},
	{
		"_id": "5a0d768c0388f6ad671fe964",
		"name": "Morris",
		"student_id": "12345679",
		"modules": [
			"5a0d768c0388f6ad671fe961",
			"5a0d768c0388f6ad671fe962",
			"5a0d768c0388f6ad671fe960"
		],
		"timetables": [
			"5a0d768d0388f6ad671fe97c"
		],
		"active_timetable": "5a0d768d0388f6ad671fe97c",
		"timetable_aliases": []
	},
	{
		"_id": "5a0d768c0388f6ad671fe967",
		"name": "Mira",
		"student_id": "12345672",
		"modules": [
			"5a0d768c0388f6ad671fe960",
			"5a0d768c0388f6ad671fe961"
		],
		"timetables": [
			"5a0d768d0388f6ad671fe976",
			"5a0d768d0388f6ad671fe978",
			"5a0d768d0388f6ad671fe97b",
			"5a0d768d0388f6ad671fe97d",
			"5a0d768d0388f6ad671fe97e"
		],
		"active_timetable": "5a0d768d0388f6ad671fe97e",
		"timetable_aliases": []
	},
	{
		"_id": "5a0d768c0388f6ad671fe965",
		"name": "Mika",
		"student_id": "12345670",
		"modules": [
			"5a0d768c0388f6ad671fe960",
			"5a0d768c0388f6ad671fe961",
			"5a0d768c0388f6ad671fe962"
		],
		"timetables": [
			"5a0d768d0388f6ad671fe977",
			"5a0d768d0388f6ad671fe979"
		],
		"active_timetable": "5a0d768d0388f6ad671fe979",
		"timetable_aliases": []
	},
	{
		"_id": "5a0d768c0388f6ad671fe966",
		"name": "Louis",
		"student_id": "12345671",
		"modules": [
			"5a0d768c0388f6ad671fe960",
			"5a0d768c0388f6ad671fe961",
			"5a0d768c0388f6ad671fe962"
		],
		"timetables": [
			"5a0d768d0388f6ad671fe97f"
		],
		"active_timetable": "5a0d768d0388f6ad671fe97f",
		"timetable_aliases": []
	}
]

const findByProp = (data, prop, val) => data.filter(x => x[prop] === val)

export const fetchModules = () => Promise.resolve(modules)
export const fetchEvents = () => Promise.resolve(events)
export const fetchTimetables = () => Promise.resolve(timetables)
export const fetchVenues = () => Promise.resolve(venues)
export const fetchUsers = () => Promise.resolve(users)
export const fetchUser = () => Promise.resolve(pickRandom(users))
export const fetchUserTimetables =  user => Promise.resolve(findByProp(timetables, '_id', user))

export const fetchTimetable = () => Promise.resolve(timetables[0])
export const fetchResolvedEvents = () => fetchEvents()
export const fetchResolvedModules = () => fetchModules()

