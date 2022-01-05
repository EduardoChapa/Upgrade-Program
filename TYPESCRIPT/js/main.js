window.onload = function () {
    var button = document.getElementById('submit');
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        var result = +num1.value + +num2.value;
        console.log(result);
    });
};
