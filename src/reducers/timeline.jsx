import slides from "../slides/index.jsx";


function timeline(state = 0, action) {
	console.log(action.type);
	switch (action.type) {
	case 'NEXT_SLIDE':
		if (state === slides.length - 1) {
			return state = 0; 
		} else {
			return state += 1;	
		}
		
	case 'PREVIOUS_SLIDE':
    	if (state === 0) {
			return state = 0; 
		} else {
			return state -= 1;	
		}
  	default:
    	return state;
  	}
}

export default { timeline }