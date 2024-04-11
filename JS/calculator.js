function calculate(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    let result=0;
    switch (document.getElementById("op").value){
        case "+": 
            result = a+b;
            break;
        case "-":
            result = a-b;
            break;
        case "*":
            result =  a*b;   
            break;
        case "/":
            if(b==0){alert("0으로 나눌수는 없습니다."); break;}
            result =  a/b;  
            break;
        default:
            alert("올바른 연산자를 선택해주세요.");
            return;         
    }
    document.getElementById("result").value = result;
}

function resetCalculator(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("result").value="";
}