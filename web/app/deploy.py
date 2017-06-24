#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import docker
from flask import current_app


def get_client(docker_url):
    client = docker.DockerClient(base_url=docker_url)
    return client


def run_docker(type, docker_args):
    client = current_app.docker_client
    print(docker_args)
    print(client.version())
