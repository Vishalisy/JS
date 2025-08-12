while(true){
    var a=parseInt(prompt("Enter f n"));
    var b=parseInt(prompt("s n"));
    var op=prompt("op");
    var res;
    
    
    if(op==='+'){
        res=a+b;
        document.getElementById('output').innerHTML+='output is '+res;
        break;
    }
    else if(op==='-'){
        res=a-b;
        document.getElementById('output').innerHTML+='output is '+res;
        break;

    }
    else if(op==='*'){
        res=a*b;
        document.getElementById('output').innerHTML+='output is '+res;
        break;
    }
    else if(op==='/'){
        res=a/b;
        document.getElementById('output').innerHTML+='output is '+res;
        break;
    }
    else{
        res="Invalid operator";
        break;
    }
    


}







// function add(a,b)
//     return a+b;
// }
// var a=10;
// var b=20;
// var c=add(a,b);
// document.getElementById('para1').innerHTML=c;


// Array---> variable const....
// const Array=["Mahesh","vishali","sree","hari"];
// document.getElementById('para1').innerHTML=Array[2];


//for loop
// var s=1;
// var e=10;
// for(let i=1;i<=10;i++)
// {
//     document.getElementById('para1').innerHTML+=i+" ";
// }


//window.alert("hello");

// var age=19;
// var weigth=160;

// if(age>19){
//     if(weigth<120){
//         document.getElementById("para1").innerHTML="He can";
//     }
//     else{
//         document.getElementById("para1").innerHTML="extra";
//     }
// }
// else{
//     document.getElementById("para1").innerHTML="he canot";

// }

    
    // var x=100;   //gobal variable
// }
// if(true){
//     let y=200;  //local variable
//     document.getElementById("para1").innerHTML =y; //can access

// }
// document.getElementById("para2").innerHTML=x;
// //document.getElementById("para").innerHTM = y; //canot access
