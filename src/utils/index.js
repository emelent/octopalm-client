export const getScreenType = ({width}) => {
	if (width < 768) return  'XS'
	if (width < 992) return  'SM'
	if (width < 1200) return 'MD'
	return 'LG'
}

export const action = (type, payload) => ({type, payload})