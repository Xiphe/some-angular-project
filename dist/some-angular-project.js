/*!
 * some-angular-project v0.0.0
 * https://github.com/Xiphe/some-angular-project
 *
 * Just a sandbox for angular stuff
 *
 * Copyright 2015, Hannes Diercks <hi@xiphe.net>
 * Released under the MIT license
 */
(function(angular, undefined) {
  'use strict';

  // src/js/helper.module.js
  var myModule = angular.module('some-angular-project', []);

  // src/js/directive.directive.js
  myModule.directive('myDirective', function() {
    return {
      templateUrl: 'directive.html',
      controller: ['$scope', function($scope) {
        $scope.foo = 'bar';
      }]
    };
  });

  // /Users/hannesdiercks/Sites/some-angular-project/node_modules/grunt-angular-toolbox/.tmp/ng_templates.js
  angular.module('some-angular-project').run(['$templateCache', function($templateCache) {
    'use strict';

    $templateCache.put('directive.html',
      "<div><h1>My Directive</h1><h2>{{foo}}</h2></div>"
    );

  }]);
})(window.angular);
