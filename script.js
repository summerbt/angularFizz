angular.module('myApp', [])
    //create a Filter
    .filter("fizzBuzz", function () {
        //    Defining the filter function

        var output = '';

        return function (input) {
            if (input % 3 === 0) {
                output = "Fizz";
                if (input % 5 === 0) {
                    output = "Fizz Buzz";
                }
            } else if (input % 5 === 0) {
                output = "Buzz";
            } else {
                output = input;
            }
            return output;
        }
    })
    .controller('myController', ['$scope', function ($scope) {
        $scope.range = function (min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
                console.log(i);
            }
            return input;
        };
}])
