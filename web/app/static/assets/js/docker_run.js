var init_terminal = function() {
    var term = new Terminal();
    term.open(document.getElementById('#terminal'));
    term.write('Hello from \033[1;3;31mxterm.js\033[0m $ ')
}

$(document).ready(function () {
    init_terminal();
});
