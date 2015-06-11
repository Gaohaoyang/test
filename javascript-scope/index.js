var outVariable = "我是最外层变量"; //最外层变量
function outFun() { //最外层函数
    var inVariable = "内层变量";

    function innerFun() { //内层函数
        console.log(inVariable);
    }
    innerFun();
}
// console.log(outVariable); //我是最外层变量
// outFun(); //内层变量
// console.log(inVariable); //inVariable is not defined
// innerFun(); //innerFun is not defined

function outFun2() {
    variable = "未定义直接赋值的变量";
    var inVariable2 = "内层变量2";
}
// outFun2();//要先执行这个函数，否则根本不知道里面是啥
// console.log(variable); //未定义直接赋值的变量
// console.log(inVariable2); //inVariable2 is not defined


function factory() {
    var name = 'laruence';
    var intro = function() {
        console.log('I am ' + name);
    }
    return intro;
}

function app(para) {
    var name = para;
    var func = factory();
    func();
}

app('eve');

// 调用 app 时
// para:eve
// name:undefined
// func:undefined
// arguments:[]
// 
// 调用 func 时
// name:laruence
// intro:undefined
// 
// 调用 intro 时
// name:laruence
// 
// 
// 
// 