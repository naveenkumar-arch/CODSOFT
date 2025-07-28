let result=document.getElementById('results');
console.log("1");
function v0() {
  result.value += "0";
}
function v1() {
  result.value += "1";
}
function v2() {
  result.value += "2";
}
function v3() {
  result.value += "3";
}
function v4() {
  result.value += "4";
}
function v5() {
  result.value += "5";
}
function v6() {
  result.value += "6";
}
function v7() {
  result.value += "7";
}
function v8() {
  result.value += "8";
}
function v9() {
  result.value += "9";
}
function vadd() {
  result.value += "+";
}
function vsub() {
  result.value += "-";
}
function vmul() {
  result.value += "*";
}
function vdiv() {
  result.value += "/";
}
function vresult(){
    try{
    result.value=eval(result.value);
}
catch(err){
    result.value="Error...!";
    setTimeout(error,100);
}}
function error(){
    alert("Invalid Input !");
    result.value=null;
}
