function myshow (formData){
    $.ajax({
        url: ctx+'/editvip',
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            console.log(data);
            if (data.msg) {
            } else {
                alert("图片太大,无法上传");
            }
        }
    })
}



$(".save").click(function () {
    $.ajax({
        url: ctx+'/updateUserInfo',
        type: 'POST',
        data: "vipname="+$("#vipname").val()+"&phonenumber="+$("#phonenumber").val()+"&stablephone="+$("#stablephone").val()+
        "&email="+$("#email").val()+"&social="+$("#social").val()+"&companyname="+$("#companyname").val()+"&htype="+$("#htype").val()
        +"&ctype="+$("#ctype").val()+"&stype="+$("#stype").val()+"&web="+$("#web").val()+"&address="+$("#address").val(),
        dataType: "json",
        cache: false,
        success: function (data) {
            console.log(data);
            if (data.data) {
                if (data.flag) {
                    alert("设置成功!");
                    window.location.href = ctx + "vips";
                } else {
                    return false;
                }
            }else {
                alert("您还未登录!");
            }
        }
    })
});




