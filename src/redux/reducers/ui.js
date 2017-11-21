import {getScreenType} from '../../utils'

const initialState = {
	screenType: null
}

export default (state=initialState, {type, payload}) => {
	switch (type){
		case 'RESIZE':
			return {
				...state,
				screenType: getScreenType(payload)
			}
	}
	return state
}