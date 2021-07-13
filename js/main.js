function insert(num){
    document.getElementById('textview').value = document.getElementById('textview').value + num;
}

function equal(){
    exp = document.getElementById('textview').value;
    if(typeof eval(exp) === 'number'){
        document.getElementById('textview').value = eval(exp);
    } else {
        document.getElementById('textview').value = 'Syntax Error';
    }
}

function c(){
    document.getElementById('textview').value = '';
}

function back(){
    var exp = document.getElementById('textview').value
    document.getElementById('textview').value = exp.substring(0, exp.length-1);
}