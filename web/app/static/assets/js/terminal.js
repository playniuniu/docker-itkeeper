var init_terminal = function() {
    var term = new Terminal();
    term.open(document.getElementById('terminal'));
    term.fit();
    return term;
}

var init_websocket = function(term) {
    var container_id = $("#terminal").data("container")
    // var ws_url = "ws://" + window.location.host + "/ws/terminal"
    var ws_url = "ws://127.0.0.1:8001/v1/ws/log/" + container_id;
    var ws = new WebSocket(ws_url);

    ws.onopen = function(event) {
        console.log("Connect to " + ws_url);
    }

    ws.onclose = function(event) {
        console.log("close websocket");
        term.detach();
    }

    ws.onerror = function(event) {
        console.log("websocket has error!");
        term.detach();
    }
    return ws;
}

var refresh_screen = function(term) {
    var interval_id = setInterval(function(){
        term.clear();
        
    }, 1000);
    return interval_id;
}

$(document).ready(function () {
    var term = init_terminal();
    var ws = init_websocket(term);
    term.attach(ws, false, false);
});
