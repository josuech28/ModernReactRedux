import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCmcJ84aeXJmiKtzdUNIgkFd7kWlyqf6Sk';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});
// Create a new component. This component should produce some html

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


//Take this component generated HTML and put it on the page
// (DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
