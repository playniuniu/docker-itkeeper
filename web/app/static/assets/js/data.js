var api_base_url = location.hostname + ":9011"

var deploy_data = {
    "btn-1": [
        { "name": "Jenkins", "desc": "Jenkins 持续集成服务", "method": "Docker", "platform": "Linux", "logo": "jenkins" },
        { "name": "Gitlab", "desc": "Gitlab 版本控制服务", "method": "Docker", "platform": "Linux", "logo": "gitlab" },
        { "name": "Selenium", "desc": "Selenium 自动化测试平台", "method": "Docker", "platform": "Linux", "logo": "selenium" },
        { "name": "Nginx", "desc": "Nginx 反向代理服务", "method": "Docker", "platform": "Linux", "logo": "nginx" },
        { "name": "Apache", "desc": "HTTP/HTTPS 网页服务", "method": "Docker", "platform": "Linux", "logo": "apache" },
    ],
    "btn-2": [
        { "name": "Weblogic", "desc": "Weblogic Java 中间件业务", "method": "Docker", "platform": "Linux", "logo": "oracle" },
        { "name": "Tomcat", "desc": "Tomcat Java 中间件业务", "method": "Docker", "platform": "Linux", "logo": "tomcat" },
        { "name": "Laravel", "desc": "Laravel PHP 框架", "method": "Docker", "platform": "Linux", "logo": "laravel" },
        { "name": "Rails", "desc": "Ruby on Rails 框架", "method": "Docker", "platform": "Linux", "logo": "rails" },
        { "name": "Flask", "desc": "Flask Python 框架", "method": "Docker", "platform": "Linux", "logo": "flask" },
    ],
    "btn-3": [
        { "name": "MySQL", "desc": "MySQL 5.7 数据库", "method": "Docker", "platform": "Linux", "logo": "mysql" },
        { "name": "MongoDB", "desc": "MongoDB 3.4 NoSQL 数据库", "method": "Docker", "platform": "Linux", "logo": "mongodb" },
        { "name": "PostgreSQL", "desc": "PostgreSQL 9.6 数据库", "method": "Docker", "platform": "Linux", "logo": "postgresql" },
        { "name": "Redis", "desc": "Redis 内存数据库", "method": "Docker", "platform": "Linux", "logo": "redis" },
        { "name": "Oracle", "desc": "Oracle 12g 数据库", "method": "Script", "platform": "Linux", "logo": "oracle" },
    ],
    "btn-4": [
        { "name": "Jupyter", "desc": "Jupyter 金融工具箱", "method": "Docker", "platform": "Linux", "logo": "jupyter" },
        { "name": "Elastic", "desc": "Elastic Search 搜索服务", "method": "Docker", "platform": "Linux", "logo": "elasticsearch" },
        { "name": "Spark", "desc": "Spakr 内存型大叔剧平台", "method": "Docker", "platform": "Linux", "logo": "spark" },
        { "name": "Hadoop", "desc": "Hadoop 大数据平台", "method": "Script", "platform": "Linux", "logo": "hadoop" },
        { "name": "Tensorflow", "desc": "Tensorflow 机器学习平台", "method": "Docker", "platform": "Linux", "logo": "tensorflow" },
    ],
}

var alert_str = `
    <div class="alert alert-error alert-dismissible" id="alert-msg">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h4><i class="icon fa fa-exclamation-circle"></i> 错误!</h4>
        <span>不能够创建 Weblogic!</span>
    </div>
`

var success_str = `
    <div class="alert alert-success alert-dismissible" id="alert-msg">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h4><i class="icon fa fa-check"></i> 成功!</h4>
        <span>创建 Weblogic 成功，自动转向日志页面...</span>
    </div>
`
