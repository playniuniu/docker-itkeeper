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

var init_from = function() {
    // init select2
    $(".select2").select2();

    // init form
    var deploy_form = $('#deploy-form');

    deploy_form.submit(function (e) {
        e.preventDefault();
        var form_data = deploy_form.serialize();

        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8001/v1/run/",
            data: form_data,
            success: function (data) {
                if( data.status === "ok") {
                    $(".alert-container").html(success_str);
                    container_id = data.container_info.short_id;
                    setTimeout(function(){
                        window.location.href = "/pages/terminal/" + container_id;
                    }, 1500); 
                }
                else {
                    console.log("create container error!");
                    $(".alert-container").html(alert_str);
                }
            },
            error: function (data) {
                console.log('submit data error!');
            },
        });
    });
}

$(document).ready(function(){
    init_from();
});
