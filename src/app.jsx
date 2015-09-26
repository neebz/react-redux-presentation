import React from 'react'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { timeline } from './reducers/timeline.jsx';

import Presentation from './presentation.jsx';


let store = createStore(timeline);


document.addEventListener("DOMContentLoaded", function(event) { 
  React.render(
  	<Provider store={store}>
  	{() =>
  	  <Presentation />
  	}
	</Provider>
  	, document.body)	
});