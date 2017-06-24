#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import current_app
from time import sleep
import logging


def get_page_data():
    return current_app.config["PAGE_DATA"]


def breadcrumb(page_data, level1, level2, level3=None):
    """ Add breadcrumb """
    router_index = {
        'index': {
            'name': '首页',
            'url': '/'
        },
        'dashboard': {
            'name': '系统概览',
            'url': '/'
        },
        'recovery': {
            'name': '一键恢复',
            'url': '/pages/recovery/'
        },
        'deploy': {
            'name': '快速部署',
            'url': '/pages/deploy/'
        },
        'trans': {
            'name': '业务迁移',
            'url': '/pages/trans/'
        },
        'ports': {
            'name': '端口扫描',
            'url': '/pages/ports/'
        },
    }

    page_data['breadcrumb'] = []
    page_data['breadcrumb'].append(router_index.get(level1, None))
    page_data['breadcrumb'].append(router_index.get(level2, None))

    if level3:
        page_data['breadcrumb'].append(level3)

    page_data['breadcrumb'][-1]['last_flag'] = True
    return page_data


def send_websocket_data(ws):
    while True:
        try:
            ws.send("niuniu\r\n")
            sleep(1)
        except BrokenPipeError as e:
            logging.info("websocket closed")
            break
