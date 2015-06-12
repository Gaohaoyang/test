/*var person = new Object();
person.name = "Gaohaoyang";
person.job = "FE";
person.sayName = function() {
    console.log(this.name);
}

var person = {
    name: "Gaohaoyang",
    job: "FE",
    sayName: function() {
        console.log(this.name);
    }
};

function foo(x, y) {
    if (typeof x === 'number' &&
        typeof y === 'number') {
        return x + y;
    } else {
        return 0;
    }
}
foo(1, 2); // 3


function add(a, b) {
    return a + b;
}

//function variable
var add = function(a, b) {
    // body...
};

// IEF(Immediately Executed Function)
(function() {
    // body...
})();

/*return function() {
    // body...
};*/

//NFE(Named Function Expression)
/*var add = function foo(a, b) {
    // body...
};*/

/*var num = add(1, 2);
console.log(num);

var add = function(a, b) {
    return a + b;
};*/

/*var func = function nfe() {};
console.log(func === nfe);*/
// 在 IE6~8，得到 false
// 在 IE9+ 及现代浏览器中 Uncaught ReferenceError: nfe is not defined
// 

var func = new Function('a','b','console.log(a+b);');
func(1,2);//3

var func2 = Function('a','b','console.log(a+b);');
func2(1,2);//3