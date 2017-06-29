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
                <li><a href="/pages/deploy/${val.name}">部署平台 <span class="pull-right badge bg-green">${val.platform}</span></a></li>
                <li><a href="/pages/deploy/${val.name}">部署方式 <span class="pull-right">${val.method}</span></a></li>
                <li><a href="/pages/deploy/${val.name}">开始部署 <span class="pull-right badge bg-aqua-active"><i class="ion ion-arrow-right-c"></i></span></a></li>
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
    init_sidebar("#deploy");
    init_btn();
    $("#btn-1").click();
});
