$(function(){
    $(":button[id!='cpBtn'][id!='lsBtn'][id!='searchBtn']").click(function(){
        var currentPage=$(this).val()   ;
        //这里可以选择是否接收,因为你不一定使用搜索框,看不懂就不需要改写一样可以分页
        var keyWord=$("#keyWordInput").val()  ;
        $("#currentPage").val(currentPage);
        $("#keyWord").val(keyWord);                  //同上
        $("#spForm").submit() ;
    });
    $("#cpMenu a").click(function(){
        var currentPage=$(this).text()  ;
        var keyWord=$("#keyWordInput").val()  ;
        $("#currentPage").val(currentPage);
        $("#keyWord").val(keyWord);
        $("#spForm").submit() ;
    });
    $("#lsMenu a").click(function(){
        var lineSize=$(this).text()   ;
        var keyWord=$("#keyWordInput").val()  ;
        $("#lineSize").val(lineSize);
        $("#keyWord").val(keyWord);
        $("#spForm").submit() ;
    });

    $("#searchBtn").click(function(){
        var keyWord=$("#keyWordInput").val()  ;
        $("#keyWord").val(keyWord);
        $("#spForm").submit() ;
        return false ;
    });
});