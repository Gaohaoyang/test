var myObject = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1
    }
}

myObject.increment()
console.log(myObject.value) //1

myObject.increment(3)
console.log(myObject.value) //4


var add = function(a, b) {
    return a + b
}

myObject.double = function() {
    var that = this
    var helper = function() {
        that.value = add(that.value, that.value)
    }
    helper()
}

myObject.double()
console.log(myObject.value) //8

//创建构造器函数
var Quo = function(string) {
    this.status = string
}

//给Que的所有实例提供一个公共方法
Quo.prototype.getStatus = function() {
    return this.status
}

//实例化
var myQuo = new Quo('confused')

console.log(myQuo.getStatus()) //confused


var arr = [3, 4]
var sum = add.apply(null, arr)
console.log(sum) //7

var statusObject = {
    status: 'hello'
}

var status = Quo.prototype.getStatus.apply(statusObject)
console.log(status) //hello
