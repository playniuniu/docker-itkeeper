# Docker for ITKeeper

### Run

```bash
docker run -d --name itkeeper -p 9010:9010 playniuniu/itkeeper 
```

### Nginx

For nginx conf file, see below:

```nginx
server {
    listen 80;
    server_name www.example.com;

    access_log /var/log/nginx/example.log;

    location / {
        proxy_pass http://127.0.0.1:9010/;
        proxy_redirect     off;
        proxy_set_header   Host                 $host;
        proxy_set_header   X-Real-IP            $remote_addr;
        proxy_set_header   X-Forwarded-For      $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto    $scheme;
    }
}
```

### Tech spec

#### Front End:

1. AdminLTE

#### Back End

1. Flask

2. meinheld

3. Docker

#### Flask

1. change **static_url_path** to root folder

2. use factory model to init Flask app 

3. use meinheld to backend Flask app
