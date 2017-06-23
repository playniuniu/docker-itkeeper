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
        { "name": "PostgreSQL", "desc": "PostgreSQL 9.6 数据库", "method": "Docker", "platform": "Linux", "logo": "postgre" },
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

var generate_list = function(id) {
    // clear section 
    $(".deploy-section").html();

    // get data
    var section_data = deploy_data[id];

    // generate section list 
    var items = [];
    $.each(section_data, function (key, val) {
        var item_html = `
<div class="col-md-4">
    <div class="box box-widget widget-user-2">
        <div class="widget-user-header">
            <div class="widget-user-image">
                <img src="/assets/images/logos/${val.logo}.png">
            </div>
            <h3 class="widget-user-username">${val.name}</h3>
            <h5 class="widget-user-desc">${val.desc}</h5>
        </div>
        <div class="box-footer no-padding">
            <ul class="nav nav-stacked">
                <li><a href="#">部署平台 <span class="pull-right badge bg-green">${val.platform}</span></a></li>
                <li><a href="#">部署方式 <span class="pull-right">${val.method}</span></a></li>
                <li><a href="#">开始部署 <span class="pull-right badge bg-aqua-active"><i class="ion ion-arrow-right-c"></i></span></a></li>
            </ul>
        </div>
    </div>
</div>
        `
        items.push(item_html);
    });

    // set data to html
    $(".deploy-section").html(
        items.join('')
    );
}

var init_btn = function() {
    $(".btn-app").on("click", function() {
        $(".btn-app").removeClass("active");
        $(this).addClass("active");
        generate_list($(this).attr('id'));
    });
}

$(document).ready(function () {
    init_btn();
    $("#btn-1").click();
});
