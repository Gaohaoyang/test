var a = 0;
var b = 0;

function A(a) {
    function B(b) {
        alert(a + b++);
    }
    alert(b);
}
A(1); //0
B(1); //error
/*这是联想前端的一道笔试题，我记不太清楚，好像是这样*/
// 还有一些我没答好的
// Ajax跨域
// JavaScript类，继承，私有变量