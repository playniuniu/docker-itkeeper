var init_terminal = function() {
    var term = new Terminal();
    term.open(document.getElementById('terminal'));
    term.fit();
    term.clear();
    return term;
}

var init_websocket = function(term) {
    var container_id = $("#terminal").data("container")
    var ws_url = "ws://" + api_base_url + "/v1/ws/log/" + container_id;
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

var init_btn = function() {
    var run_port = 8001;
    var run_url = "http://" + location.hostname + ":" + run_port + "/console";
    $("#checkrun").on("click", function(e) {
        window.open(run_url,'_blank');
    });
}

$(document).ready(function () {
    init_sidebar("#deploy");
    init_btn();
    var term = init_terminal();
    var ws = init_websocket(term);
    term.attach(ws, false, false);
});
