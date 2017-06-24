from flask import Blueprint, request
from multiprocessing import Process
from .utilities import send_websocket_data

ws = Blueprint('ws', __name__)


@ws.route('terminal')
def ws_terminal():
    ws = request.environ.get('wsgi.websocket')
    p = Process(target=send_websocket_data, args=(ws,))
    p.start()
    return ""
