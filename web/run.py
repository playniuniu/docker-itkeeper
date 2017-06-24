#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from app import create_app
from meinheld import server, middleware

app = create_app("../config.py")

if __name__ == '__main__':
    server.listen(("0.0.0.0", 8000))
    server.run(middleware.WebSocketMiddleware(app))
