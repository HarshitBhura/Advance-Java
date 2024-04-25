let counter = 0;
function increment() {
    counter++;
    displayCounterToUi()
}
function decrement() {
    counter--;
    displayCounterToUi()
}

function displayCounterToUi() {
    let ele = document.getElementById('a').innerHTML = 'counter ' + counter;
}