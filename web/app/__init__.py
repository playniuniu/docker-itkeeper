#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import Flask
from .views import main


def create_app(config_filename):
    # app = Flask(__name__)
    app = Flask(__name__, static_folder='static', static_url_path='')
    app.jinja_env.trim_blocks = True
    app.jinja_env.lstrip_blocks = True

    app.config.from_pyfile(config_filename)
    app.register_blueprint(main, url_prefix="/")
    return app
