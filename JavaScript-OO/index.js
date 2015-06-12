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

/*var func = new Function('a','b','console.log(a+b);');
func(1,2);//3

var func2 = Function('a','b','console.log(a+b);');
func2(1,2);//3*/

/*console.log(this.document === document); //true
console.log(this === window); //true

this.a = 91;
console.log(window.a); //91*/

/*function f1 () {
    return this;
}
console.log(f1() === window);//true, global object

function f2 () {
    "use strict";//使用严格模式
    return this;
}
console.log(f1() === undefined);//true*/

/*var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};
console.log(o.f()); // logs 37
var o = {
    prop: 37
};

function independent() {
    return this.prop;
}
o.f = independent;
console.log(o.f()); // logs 37*/

/*var o = {
    f: function() {
        return this.a + this.b;
    }
};
var p = Object.create(o);
p.a = 1;
p.b = 2;
console.log(p.f()); //3*/
/*function modulus() {
    return Math.sqrt(this.re * this.re + this.im * this.im);
}
var o = {
    re: 1,
    im: -1,
    get phase() {
        return Math.atan2(this.im, this.re);
    }
};
Object.defineProperty(o, 'modulus', {
    get: modulus,
    enumerable: true,
    configurable: true
});
console.log(o.phase, o.modulus); // -0.78 1.4142*/

/*function MyClass() {
    this.a = 25;
}
var o = new MyClass();
console.log(o.a); //25

//new MyClass() 的时候，MyClass()中的this会指向一个空对象，这个对象的原型会指向 MyClass.prototype。MyClass()没有返回值或者返回为基本类型时，默认将this返回。
//
function C2() {
    this.a = 26;
    return {
        a: 24
    };
}

o = new C2();
console.log(o.a); //24

//因为返回了对象，将这个对象作为返回值*/

/*function add(c, d) {
    return this.a + this.b + c + d;
}
var o = {
    a: 1,
    b: 3
};
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
function bar() {
    console.log(Object.prototype.toString.call(this));
}
bar.call(7); // "[object Number]"*/

function f() {
    return this.a;
}
var g = f.bind({
    a: "test"
});
console.log(g()); // test
var o = {
    a: 37,
    f: f,
    g: g
};
console.log(o.f(), o.g()); // 37, test

// 绑定之后再调用时，仍然会按绑定时的内容走，所以 o.g() 结果是 test