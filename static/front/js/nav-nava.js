<!--鼠标滚轮-->

$(document).ready(function(){
    //获取nav距离顶部的距离
    var navtop=$("#nava").offset().top;
    $(document).scroll(function(){
        //获取滚动条滚动的高度
        var scroltop=$(document).scrollTop();
        if (scroltop > 80){
            $("#nava").css({
                "position":"fixed",

                "top":"0px",
                "z-index":"9999"


            })
        }else {
            $("#nava").css({
                "position":"",
                "top":"",
                "z-index":""
            })
        }
    })
});

