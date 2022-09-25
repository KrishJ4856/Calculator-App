var body = document.getElementsByTagName("body");
var result = document.getElementById("result");
var del = document.getElementById("delete");
var reset = document.getElementById("reset");
var equals = document.getElementById("equals");
var spans = document.querySelectorAll(".item");
var circle = document.getElementById("circle");
var themeNum = document.querySelectorAll(".theme-num");

for(i=0; i<spans.length; i++){
    spans[i].addEventListener("click", display1);
}

function display1(e){
    result.value += e.srcElement.innerHTML;
}

del.addEventListener("click", ()=>{
    result.value = delres(result.value);
});
function delres(a){
    return a.substring(0, a.length-4);
}


reset.addEventListener("click", ()=>{
    result.value = "";
});

equals.addEventListener("click", ()=>{
    result.value = delres2(result.value);
    if(result.value != ""){
        result.value = eval(result.value);
    }
});
function delres2(a){
    return a.substring(0, a.length-1);
}

for(var i=0; i<themeNum.length; i++){
    themeNum[i].addEventListener("click", moveCircle);
}
function moveCircle(e){
    if(e.srcElement.innerHTML == "1"){
        circle.style.left = "2px";
        document.documentElement.style.setProperty("--main-bg","hsl(222, 26%, 31%)");
        document.documentElement.style.setProperty("--keypad-bg","hsl(223, 31%, 20%)");
        document.documentElement.style.setProperty("--screen-bg","hsl(224, 36%, 15%)");
        document.documentElement.style.setProperty("--key-bg1","hsl(225, 21%, 49%)");
        document.documentElement.style.setProperty("--key-bg2","hsl(6, 63%, 50%)");
        document.documentElement.style.setProperty("--key-bg3","white");
        document.documentElement.style.setProperty("--text1","hsl(221, 14%, 31%)");
        document.documentElement.style.setProperty("--text2","hsl(0, 0, 100%)");
        document.documentElement.style.setProperty("--text3","white");
        circle.style.backgroundColor = "hsl(25, 98%, 40%)";
        equals.style.backgroundColor = "hsl(25, 98%, 40%)";
    }
    else if(e.srcElement.innerHTML == "2"){
        circle.style.left = "12px";
        document.documentElement.style.setProperty("--main-bg","hsl(0, 0%, 90%)");
        document.documentElement.style.setProperty("--keypad-bg","hsl(0, 5%, 81%)");
        document.documentElement.style.setProperty("--screen-bg","hsl(0, 0%, 93%)");
        document.documentElement.style.setProperty("--key-bg1","hsl(185, 42%, 37%)");
        document.documentElement.style.setProperty("--key-bg2","hsl(25, 98%, 40%)");
        document.documentElement.style.setProperty("--key-bg3","white");
        document.documentElement.style.setProperty("--text1","hsl(60, 10%, 19%)");
        document.documentElement.style.setProperty("--text2","hsl(0, 0, 100%)");
        document.documentElement.style.setProperty("--text3","black");
        circle.style.backgroundColor = "hsl(25, 98%, 40%)";
        equals.style.backgroundColor = "hsl(25, 98%, 40%)";
    }
    else{
        circle.style.left = "23px";
        document.documentElement.style.setProperty("--main-bg","hsl(268, 75%, 9%)");
        document.documentElement.style.setProperty("--keypad-bg","hsl(268, 71%, 12%)");
        document.documentElement.style.setProperty("--screen-bg","hsl(268, 71%, 12%)");
        document.documentElement.style.setProperty("--key-bg1","hsl(281, 89%, 26%)");
        document.documentElement.style.setProperty("--key-bg2","hsl(176, 100%, 44%)");
        document.documentElement.style.setProperty("--key-bg3","hsl(281, 89%, 26%)");
        document.documentElement.style.setProperty("--text1","hsl(52, 100%, 62%)");
        document.documentElement.style.setProperty("--text2","hsl(52, 100%, 62%)");
        document.documentElement.style.setProperty("--text3","hsl(0, 0, 100%)");
        circle.style.backgroundColor = "hsl(176, 100%, 44%)";
        equals.style.backgroundColor = "hsl(176, 100%, 44%)";
        equals.style.color = "black";
    }
}
console.log("krish jaiswal");