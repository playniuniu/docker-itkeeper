#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import current_app
from copy import deepcopy


def get_page_data():
    page_data = deepcopy(current_app.config["PAGE_DATA"])
    return page_data


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
        'trans': {'name': '业务迁移',
                  'url': '/pages/trans/'
        },
        'ports': { 'name': '端口扫描',
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
