var init_terminal = function() {
    var term = new Terminal();
    term.open(document.getElementById('terminal'));
    term.fit();
    init_websocket(term);
}

var init_websocket = function(term) {
    var ws_url = "ws://" + window.location.host + "/ws/docker"
    // var ws_url = "ws://127.0.0.1:8001/docker";
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

    term.attach(ws);
}

$(document).ready(function () {
    init_terminal();
});
