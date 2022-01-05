window.onload = function() {
    var button = document.getElementById('submit');
    var num1 = document.getElementById('num1')! as HTMLInputElement;
    var num2 = document.getElementById('num2')! as HTMLInputElement;
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        var result: number = +num1.value + +num2.value;
        console.log(result) 
    });
}