// JavaScript source code
(function () {
    angular.module('JSGrid', [])
   .directive('ngJsGrid', function () {
       return {
           restrict: 'EA',
           scope: {
               options: '=',
			   
           },
           link: function (scope, element, attr) {
               var tableCreated = false;
			   
               scope.$watch('options', function (newValue, oldValue) {
                   if (tableCreated && newValue === oldValue) return;
                   $(element).jsGrid('destroy');
                   if (newValue) {
                       $(element).jsGrid(scope.options);
                   }
				   
                   tableCreated = typeof (newValue) !== 'undefined';
               });
               $(window).resize(function () {
                   if (tableCreated)
                       $(element).bootstrapTable('reset');
               })
           }
       };
   })
})();