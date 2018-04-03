$(".login").click(function (){
    if($("#phonenumber").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
        $.ajax({
            url : ctx+'/log',
            type : 'POST',
            data :$("#mainform").serialize() ,
            dataType : 'json',
            success : function(data) {
                if(data.msg){
                    if(data.message){
                        window.location.href = ctx+"/vip";
                    }else{
                        $("#login1124").html("登录失败！用户名或者密码错误!").css('border','1px solid red').css('background',' #ffebeb');
                        return false;
                    }
                }else {
                    alert("您已经登录过了");
                }
            }

        });
    } else{
        $.ajax({
            url : ctx+'/logs',
            type : 'POST',
            data : $("#mainform").serialize(),
            dataType : 'json',
            success : function(msg) {
                if(msg.msg){
                   alert(msg.arr);
                    if(msg.data){
                    window.location.href = ctx+"/vip";
                        }else {
                    $("#login11241").html("登录失败！用户名或者密码错误!").css('border','1px solid red').css('background',' #ffebeb');
                    return false;
                    }
                }else {
                    alert("您已经登录过了");
                }
            }
        })
    }
});

function key() {
    if(event.keyCode==13){
        document.getElementById("logins").click();
    }
}