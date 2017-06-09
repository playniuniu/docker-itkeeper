#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from app import create_app
import meinheld

app = create_app("./static/config.py")

if __name__ == '__main__':
    meinheld.listen(("0.0.0.0", 8000))
    meinheld.run(app)
