// TODO: Render the `App` component to the DOM

import App from './components/App.js';
import searchYouTube from '/compiled/src/lib/searchYouTube.js';

ReactDOM.render(<App searchVideos={searchYouTube}/>, document.getElementById('app'));

