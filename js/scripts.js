//Reductor-> Gestiona las acciones
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
        case 'RESET':
            state = 0;
            break;
    }
    return state;
}

function render() {
    $('#contador').val(store.getState());
}

var store = Redux.createStore(counter);
store.subscribe(render);
render();

$("#btnInicio").click(function () {
    interval = setInterval(function () {
        // Accion
        store.dispatch({type: 'INCREMENT'});
    }, 1000);
});


$("#btnReinicio").click(function () {
    // Accion
    store.dispatch({type: 'RESET'});
});

$("#btnDetener").click(function () {
    clearInterval(interval);
});

/*
 * Anotaciones
 * Única fuente de la verdad
 * Estado es de solo lectura
 *  store.getState();
 * 
 * 
 */