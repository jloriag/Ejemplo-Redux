function counter(state, action) {
    if (typeof state == 'undefined') {
        state = 0;
    }

    switch (action.type) {
        case 'INCREMENT':
            state++;
            break;
        case 'DECREMENT':
            state--;
            break;
    }
    return state;
}

function render() {
    document.querySelector('body').innerHTML = store.getState();
}

var store = Redux.createStore(counter);
store.subscribe(render);
render();

(function () {
    setInterval(function () {
        store.dispatch({type: 'DECREMENT'});
    }, 1000);
})();

document.addEventListener('click', function () {
    store.dispatch({type: 'INCREMENT'});
});