'use strict';

// Cats controller
angular.module('cats').controller('CatsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Cats',
	function($scope, $stateParams, $location, Authentication, Cats) {
		$scope.authentication = Authentication;

		// Create new Cat
		$scope.create = function() {
			// Create new Cat object
			var cat = new Cats ({
				name: this.name,
				color: this.color,
				birthday: this.birthday,
				image: this.image
			});

			// Redirect after save
			cat.$save(function(response) {
				$location.path('cats/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Cat
		$scope.remove = function(cat) {
			if ( cat ) { 
				cat.$remove();

				for (var i in $scope.cats) {
					if ($scope.cats [i] === cat) {
						$scope.cats.splice(i, 1);
					}
				}
			} else {
				$scope.cat.$remove(function() {
					$location.path('cats');
				});
			}
		};

		// Update existing Cat
		$scope.update = function() {
			var cat = $scope.cat;

			cat.$update(function() {
				$location.path('cats/' + cat._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Cats
		$scope.find = function() {
			$scope.cats = Cats.query();
		};

		// Find existing Cat
		$scope.findOne = function() {
			$scope.cat = Cats.get({ 
				catId: $stateParams.catId
			});
			// $scope.cat.then(){
				$scope.hasPic();	
			// };
		};

		$scope.hasPic = function() {
			console.log($scope.cat.name);
			// if ($scope.cat.image === '' || $scope.cat.image === undefined){
			// 	console.log("_________cat has no pic___________")
			// 	$scope.catPic = false
			// } else {
			// 	console.log("_________cat has pic___________")
			// 	$scope.catPic = true
			// }
		}
	}
]);