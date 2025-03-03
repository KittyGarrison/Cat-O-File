'use strict';

// Configuring the Articles module
angular.module('cats').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Cats', 'cats', 'dropdown', '/cats(/create)?');
		Menus.addSubMenuItem('topbar', 'cats', 'List Cats', 'cats');
		Menus.addSubMenuItem('topbar', 'cats', 'New Cat', 'cats/create');
	}
]);