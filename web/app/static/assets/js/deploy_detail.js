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
            url: "http://" + api_base_url + "/v1/run/",
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
    init_sidebar("#deploy");
    init_from();
});
