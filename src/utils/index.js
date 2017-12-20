export const getScreenType = ({width}) => {
	if (width < 768) return  'XS'
	if (width < 992) return  'SM'
	if (width < 1200) return 'MD'
	return 'LG'
}

export const pickRandom = arr => arr[randomNatural(arr.length)]
export const randomNatural = max => Math.floor(Math.random() * max)
export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min
export const action = (type, payload) => ({type, payload})
export const arr2Obj = arr => arr.reduce(
	(prev, cur) => {
		prev[cur] = cur
		return prev
	}, {})