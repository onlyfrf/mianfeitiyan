$(".save").click(function(){
    if($("#oldpassword").val()==null || $("#oldpassword").val()=="" ) {
        alert("请输入密码");
        return ;
    } else if($("#password").val()==null||$("#password").val()=="" ){
        alert("请输入新密码");
        return ;
    }else if($("#repassword").val()==null||$("#repassword").val()=="" ){
        alert("请输入重复密码");
        return ;
    }else if($("#oldpassword").val()==$("#password").val() ){
        alert("新旧密码不能一样");
        return ;
    }
    $.ajax({
        url : ctx+'/findpwd',
        type : 'POST',
        data : "oldpassword="+$("#oldpassword").val()+"&password="+$("#password").val()+"&repassword="+$("#repassword").val(),
        async:true,
        cache:false,
        dataType : 'json',
        success : function(data){
            if(data!=null){
                alert(data[0]);
                window.location.href = ctx+"/pwd"
            }
        }})
});