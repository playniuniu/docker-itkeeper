#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, url_for
from .utilities import get_page_data, breadcrumb
from .deploy import run_docker

main = Blueprint('main', __name__)


@main.route('/')
def pages_index():
    page_data = get_page_data()
    page_data = breadcrumb(page_data, 'index', 'dashboard')
    return render_template('pages/index.html', page_data=page_data)


@main.route('pages/recovery/')
def pages_recovery():
    page_data = get_page_data()
    page_data = breadcrumb(page_data, 'index', 'recovery')
    return render_template('pages/recovery.html', page_data=page_data)


@main.route('pages/deploy/')
def pages_deploy():
    page_data = get_page_data()
    page_data = breadcrumb(page_data, 'index', 'deploy')
    return render_template('pages/deploy.html', page_data=page_data)


@main.route('pages/deploy/<software>')
def pages_deploy_detail(software):
    page_data = get_page_data()
    page_data = breadcrumb(page_data, 'index', 'deploy', {"name": software})
    return render_template('pages/deploy_detail.html', page_data=page_data)


@main.route('pages/trans/')
def pages_trans():
    page_data = get_page_data()
    page_data = breadcrumb(page_data, 'index', 'trans')
    return render_template('pages/trans.html', page_data=page_data)


@main.route('pages/terminal/')
def pages_terminal():
    page_data = get_page_data()
    page_data = breadcrumb(page_data, 'index', 'trans')
    return render_template('pages/terminal.html', page_data=page_data)


@main.route('pages/run/', methods=['POST'])
def pages_run_post():
    docker_args = {
        "domain_name": request.form.get('domain', 'base_domain'),
        "domain_password": request.form.get('password', 'welcome1')
    }
    run_docker("weblogic", docker_args)
    return redirect(url_for('main.pages_terminal'))
