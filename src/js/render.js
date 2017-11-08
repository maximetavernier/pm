/**
 * Render
 */
import React from 'react';
import ReactDOM from 'react-dom';

import PlaylistManager from './components/PlaylistManager';

/**
 * React Rendering function
 */
function render() {
		ReactDOM.render(<PlaylistManager/>, document.getElementById('react-body'));
}

$(document).ready(function() {
    render();
});

